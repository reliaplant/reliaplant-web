import { doc, addDoc, collection, setDoc } from "firebase/firestore";

import { db } from "./config";

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
