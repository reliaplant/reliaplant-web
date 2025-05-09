import {
  doc,
  addDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
  query,
  orderBy,
  deleteDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { BlogContributor } from "@/types/blog";
import { db, storage } from "../config";

const CONTRIBUTORS_COLLECTION = "blogContributors";

export async function getAllContributors(): Promise<BlogContributor[]> {
  try {
    console.log("Iniciando carga de contributors...");
    const q = query(
      collection(db, CONTRIBUTORS_COLLECTION),
      orderBy("updatedAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No hay contributors");
      return [];
    }

    const contributors = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || "",
        email: data.email || "",
        bio: data.bio || "",
        photo: data.photo || "",
        active: data.active ?? true,
        socialMedia: data.socialMedia || {},
        updatedAt: data.updatedAt || new Date().toISOString(),
        createdAt: data.createdAt || new Date().toISOString(),
      } as BlogContributor;
    });

    console.log(`Encontrados ${contributors.length} contributors`);
    return contributors;
  } catch (error) {
    console.error("Error detallado al obtener contributors:", error);
    throw error;
  }
}

export async function getContributor(
  id: string
): Promise<BlogContributor | null> {
  try {
    const docRef = doc(db, CONTRIBUTORS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogContributor;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting contributor:", error);
    throw error;
  }
}

export async function createContributor(
  contributor: BlogContributor
): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, CONTRIBUTORS_COLLECTION), {
      ...contributor,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding contributor:", error);
    throw error;
  }
}

export async function updateContributor(
  id: string,
  contributor: Partial<BlogContributor>
): Promise<void> {
  try {
    // Si hay una foto nueva y existe una foto anterior, eliminar la anterior
    const existingContributor = await getContributor(id);
    if (!existingContributor) {
      throw new Error("Contributor not found");
    }

    if (
      contributor.photo &&
      existingContributor.photo &&
      existingContributor.photo !== contributor.photo &&
      existingContributor.photo.startsWith(
        "https://firebasestorage.googleapis.com/"
      )
    ) {
      try {
        await deleteContributorPhoto(existingContributor.photo);
      } catch (error) {
        console.warn("No se pudo eliminar la foto anterior:", error);
      }
    }

    const contributorRef = doc(db, CONTRIBUTORS_COLLECTION, id);
    const updateData = {
      ...contributor,
      updatedAt: new Date().toISOString(),
    };
    await updateDoc(contributorRef, updateData);

    // Actualizar todos los posts relacionados con este contributor
    await updateContributorPosts(id, {
      ...updateData,
      id, // Aseguramos que el ID se incluya en la actualización
    });
  } catch (error) {
    console.error("Error updating contributor:", error);
    throw error;
  }
}

async function updateContributorPosts(
  contributorId: string,
  contributorData: Partial<BlogContributor>
): Promise<void> {
  try {
    const q = query(
      collection(db, "blogPosts"),
      where("contributorId", "==", contributorId)
    );

    const querySnapshot = await getDocs(q);

    const batch = writeBatch(db);
    querySnapshot.docs.forEach((doc) => {
      const postRef = doc.ref;
      batch.update(postRef, {
        contributor: {
          id: contributorId,
          name: contributorData.name,
          photo: contributorData.photo,
          bio: contributorData.bio,
          socialMedia: contributorData.socialMedia,
        },
        updatedAt: new Date().toISOString(),
      });
    });

    await batch.commit();
  } catch (error) {
    console.error("Error updating contributor posts:", error);
    throw error;
  }
}

export async function deleteContributor(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, CONTRIBUTORS_COLLECTION, id));
  } catch (error) {
    console.error("Error deleting contributor:", error);
    throw error;
  }
}

export async function uploadContributorPhoto(
  file: File,
  contributorId: string
): Promise<string> {
  try {
    // Usar timestamp para evitar conflictos de nombres
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const fileName = `photo_${timestamp}.${fileExtension}`;

    const storageRef = ref(
      storage,
      `blog-contributors/${contributorId}/${fileName}`
    );
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading contributor photo:", error);
    throw error;
  }
}

export async function deleteContributorPhoto(photoUrl: string): Promise<void> {
  try {
    // Verificar si la URL es una URL de Firebase Storage
    if (!photoUrl.startsWith("https://firebasestorage.googleapis.com/")) {
      console.warn("Invalid storage URL, skipping delete");
      return;
    }

    const photoRef = ref(storage, photoUrl);
    await deleteObject(photoRef);
  } catch (error) {
    console.error("Error deleting contributor photo:", error);
    throw error;
  }
}
