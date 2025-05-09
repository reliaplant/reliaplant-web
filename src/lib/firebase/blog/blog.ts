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
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { isClient } from "@/lib/utils/isClient";

import { BlogPost } from "@/types/blog";
import { db, storage } from "../config";

const BLOG_COLLECTION = "blogPosts";

export async function createBlogPost(blogPost: BlogPost): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
      ...blogPost,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog post:", error);
    throw error;
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, BLOG_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogPost;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting blog post:", error);
    throw error;
  }
}

export async function updateBlogPost(
  id: string,
  blogPost: Partial<BlogPost>
): Promise<void> {
  try {
    const blogRef = doc(db, BLOG_COLLECTION, id);
    await updateDoc(blogRef, {
      ...blogPost,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
}

export async function deleteBlogPost(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, BLOG_COLLECTION, id));
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      orderBy("publishDate", "desc")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
}

export async function uploadBlogImage(
  file: File,
  postId: string
): Promise<string> {
  if (!file) {
    throw new Error("No file provided");
  }

  if (!isClient()) {
    throw new Error("Image upload must be performed on the client side");
  }

  try {
    // Create a unique filename with original file extension
    const fileExtension = file.name.split(".").pop();
    const timestamp = new Date().getTime();
    const uniqueFilename = `${timestamp}-${crypto.randomUUID()}.${fileExtension}`;

    // Ensure the path is correct and exists
    const storagePath = `blogReliaplant/${postId}/${uniqueFilename}`;
    const storageRef = ref(storage, storagePath);

    const metadata = {
      contentType: file.type,
      cacheControl: "public, max-age=31536000",
    };

    // Upload the file
    await uploadBytes(storageRef, file, metadata);

    // Verify the upload by trying to get the download URL
    const downloadURL = await getDownloadURL(storageRef);

    if (!downloadURL) {
      throw new Error("Failed to get download URL after upload");
    }

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error(`Failed to upload image`);
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where("published", "==", true),
      orderBy("publishDate", "desc")
    );

    // Forzar una nueva consulta
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No hay posts publicados");
      return [];
    }

    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];

    console.log(`Encontrados ${posts.length} posts publicados`);
    return posts;
  } catch (error) {
    console.error("Error getting published blog posts:", error);
    throw error;
  }
}

export async function deleteBlogImage(imageUrl: string): Promise<void> {
  if (!isClient()) {
    throw new Error("Image deletion must be performed on the client side");
  }

  try {
    // Si la URL es una Blob URL, revocarla antes de eliminar
    if (imageUrl.startsWith("blob:")) {
      URL.revokeObjectURL(imageUrl);
      return;
    }

    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting blog image:", error);
    throw error;
  }
}
