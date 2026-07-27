import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";
import { FormContactData, LeadStatus, LeadNota, LeadTarea } from "@/types/forms";

export { type FormContactData, type LeadStatus, type LeadNota, type LeadTarea } from "@/types/forms";

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

export const updateLeadStatus = async (id: string, status: LeadStatus) => {
  await updateDoc(doc(db, "form_contact", id), { status });
};

export const updateProximoSeguimiento = async (id: string, fecha: string | null) => {
  await updateDoc(doc(db, "form_contact", id), { proximoSeguimiento: fecha });
};

export const updateNotas = async (id: string, notas: LeadNota[]) => {
  await updateDoc(doc(db, "form_contact", id), { notas });
};

export const updateTareas = async (id: string, tareas: LeadTarea[]) => {
  await updateDoc(doc(db, "form_contact", id), { tareas });
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
