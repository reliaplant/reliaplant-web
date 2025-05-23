import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  addDoc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import { BlogPost, BlogContributor } from "@/app/admin/blog-editor/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// BLOG FUNCTIONS
const BLOG_COLLECTION = "blogPosts";
const CONTRIBUTORS_COLLECTION = "blogContributors";

// Get a single blog post by ID
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

// Create a new blog post
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

// Update an existing blog post
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

// Upload an image to Firebase Storage
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

// CRUD operations for blog contributors
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

// USERS AND REQUEST FUNCTIONS
interface UserData {
  name: string;
  createdAt: number;
  displayName: string;
  job: string;
  email: string;
  phoneNumber: string;
}

export async function createUser(
  userData: UserData,
  mailchimpTag: string
): Promise<void> {
  try {
    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, {
      ...userData,
      mailchimpTag,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getRefCollection(collectionName: string) {
  return doc(collection(db, collectionName));
}

export async function getSecondaryRefCollection(collectionName: string) {
  return doc(collection(db, collectionName));
}

export async function saveInfoRequest(data: any): Promise<void> {
  try {
    const requestRef = doc(db, "infoRequests", data.id);
    await setDoc(requestRef, data);
  } catch (error) {
    console.error("Error saving info request:", error);
    throw error;
  }
}

export async function sendEmail(
  sender: string,
  recipients: string[],
  subject: string,
  htmlContent: string,
  cc?: string[]
): Promise<void> {
  try {
    const emailData = {
      sender,
      recipients,
      subject,
      htmlContent,
      cc: cc || [],
      sentAt: new Date().toISOString(),
    };

    await addDoc(collection(db, "mailQueue"), emailData);
  } catch (error) {
    console.error("Error queuing email:", error);
    throw error;
  }
}
