import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config";
import { FormContactData } from "@/types/forms";

export { type FormContactData } from "@/types/forms";

export interface FormContactWithId extends FormContactData {
  id: string;
  date: Date;
}

export const saveFormContact = async (data: FormContactData) => {
  const formContactRef = collection(db, "form_contact");
  const docRef = await addDoc(formContactRef, {
    ...data,
    date: new Date(),
  });

  // Sincroniza con Brevo sin bloquear ni romper el guardado si falla
  fetch("/api/brevo-contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch((err) => console.error("Error al sincronizar con Brevo:", err));

  return docRef.id;
};

export const getAllFormContacts = async (): Promise<FormContactWithId[]> => {
  const formContactRef = collection(db, "form_contact");
  const querySnapshot = await getDocs(formContactRef);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as FormContactData & { date: any }),
    date: doc.data().date.toDate(),
  }));
};
