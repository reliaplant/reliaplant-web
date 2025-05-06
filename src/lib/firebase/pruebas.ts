import { db } from "./config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const guardarTexto = async (texto: string) => {
  if (!texto || texto.trim() === "") {
    throw new Error("El texto no puede estar vacío");
  }

  try {
    const pruebasRef = collection(db, "pruebas");
    const docRef = await addDoc(pruebasRef, {
      texto: texto,
      fechaCreacion: new Date(),
      estado: "activo",
    });

    if (!docRef.id) {
      throw new Error("No se pudo obtener el ID del documento");
    }

    return docRef.id;
  } catch (error) {
    if (error instanceof Error) {
      throw error; // Re-throw the original error
    }
    throw new Error("Error al conectar con la base de datos");
  }
};
