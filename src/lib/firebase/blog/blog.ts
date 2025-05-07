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
  try {
    const storageRef = ref(storage, `blog-images/${postId}/${file.name}`);

    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where("published", "==", true),
      orderBy("publishDate", "desc")
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error("Error getting published blog posts:", error);
    throw error;
  }
}

export async function deleteBlogImage(imageUrl: string): Promise<void> {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting blog image:", error);
    throw error;
  }
}
