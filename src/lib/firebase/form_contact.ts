import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";
import { FormContactData } from "@/types/forms";

export { type FormContactData } from "@/types/forms";

export const saveFormContact = async (data: FormContactData) => {
  const formContactRef = collection(db, "form_contact");
  const docRef = await addDoc(formContactRef, {
    ...data,
    date: new Date(),
  });
  return docRef.id;
};
