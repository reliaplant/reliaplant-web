// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  getDoc,
  getDocs,
  query,
  where,
  Timestamp,
  serverTimestamp 
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1PLYq1PPynnHxSQCwaImsXWOECf4GrOo",
  authDomain: "reliaplant-2c104.firebaseapp.com",
  projectId: "reliaplant-2c104",
  storageBucket: "reliaplant-2c104.firebasestorage.app",
  messagingSenderId: "690217097228",
  appId: "1:690217097228:web:b1cc27ec60a5ef278cb629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

/**
 * Gets a reference to a collection and creates a new document ID
 * @param collectionName - Name of the Firestore collection
 * @returns A document reference with a new ID
 */
export const getRefCollection = async (collectionName: string) => {
  return doc(collection(db, collectionName));
};

/**
 * Gets a reference to a secondary collection and creates a new document ID
 * Similar to getRefCollection but can be used for subcollections
 */
export const getSecondaryRefCollection = async (collectionName: string) => {
  return doc(collection(db, collectionName));
};

/**
 * Saves an information request to Firestore
 * @param data - Object with the information to save
 */
export const saveInfoRequest = async (data: any) => {
  try {
    if (!data.id) {
      const docRef = await getRefCollection('infoRequestRegisterP21');
      data.id = docRef.id;
    }
    await setDoc(doc(db, 'infoRequestRegisterP21', data.id), data);
    return { success: true, id: data.id };
  } catch (error) {
    console.error("Error saving info request:", error);
    return { success: false, error };
  }
};

/**
 * Creates or updates a user record
 * @param userData - User data to save
 * @param tag - Optional tag for categorization
 */
export const createUser = async (userData: any, tag: string = '') => {
  try {
    // Check if user already exists by email
    const q = query(collection(db, 'users'), where('email', '==', userData.email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // User exists, update instead of create
      const userDoc = querySnapshot.docs[0];
      await setDoc(userDoc.ref, {
        ...userData,
        tags: [...(userDoc.data().tags || []), tag].filter(Boolean),
        updatedAt: serverTimestamp()
      }, { merge: true });
      return { success: true, id: userDoc.id, isNew: false };
    } else {
      // Create new user
      const userRef = doc(collection(db, 'users'));
      await setDoc(userRef, {
        ...userData,
        tags: [tag].filter(Boolean),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { success: true, id: userRef.id, isNew: true };
    }
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return { success: false, error };
  }
};

/**
 * Sends an email through Firebase Functions or an email service
 * @param sender - Email sender
 * @param recipients - List of recipients
 * @param subject - Email subject
 * @param htmlContent - HTML content of the email
 * @param cc - Optional carbon copy recipients
 */
export const sendEmail = async (
  sender: string, 
  recipients: string[], 
  subject: string, 
  htmlContent: string,
  cc: string[] = []
) => {
  try {
    // Store the email in Firestore for processing
    const emailRef = doc(collection(db, 'emailQueue'));
    await setDoc(emailRef, {
      sender,
      recipients,
      cc,
      subject,
      htmlContent,
      status: 'pending',
      createdAt: serverTimestamp()
    });
    
    return { success: true, id: emailRef.id };
  } catch (error) {
    console.error("Error queuing email:", error);
    return { success: false, error };
  }
};

// Export the Firebase services
export { auth, db, storage, functions };
export default app;
