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
    const q = query(
      collection(db, CONTRIBUTORS_COLLECTION),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogContributor[];
  } catch (error) {
    console.error("Error getting contributors:", error);
    throw error;
  }
}

export async function getContributor(
  id: string,
  maxRetries = 3
): Promise<BlogContributor | null> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const docRef = doc(db, CONTRIBUTORS_COLLECTION, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as BlogContributor;
      } else {
        return null;
      }
    } catch (error: any) {
      if (attempt === maxRetries - 1) {
        if (error?.code === "auth/network-request-failed") {
          console.error("Network connection issue detected:", error);
          throw new Error(
            "Unable to load contributor data. Please check your internet connection."
          );
        }
        console.error("Error getting contributor:", error);
        throw error;
      }
      // Wait before retrying (exponential backoff)
      await new Promise((resolve) =>
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      );
    }
  }
  throw new Error("Maximum retry attempts reached");
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
    const contributorRef = doc(db, CONTRIBUTORS_COLLECTION, id);
    await updateDoc(contributorRef, {
      ...contributor,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating contributor:", error);
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
    const storageRef = ref(
      storage,
      `blog-contributors/${contributorId}/${file.name}`
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
    const photoRef = ref(storage, photoUrl);
    await deleteObject(photoRef);
  } catch (error) {
    console.error("Error deleting contributor photo:", error);
    throw error;
  }
}
