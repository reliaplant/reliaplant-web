// Lectura de los artículos en Firestore al compilar (y al revalidar cada hora).
// Proyecto Firebase "reliaplant-2c104" (cuenta reliaplant@gmail.com). Es el proyecto de la app
// con datos de clientes: aquí solo se lee la colección "articulos" (sin login; basta el projectId).

import { cache } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
import { COLECCION, type Articulo } from "./blog";
import type { Idioma } from "./i18n";

const NOMBRE_APP = "blog";
const app = getApps().some((a) => a.name === NOMBRE_APP)
  ? getApp(NOMBRE_APP)
  : initializeApp({ projectId: "reliaplant-2c104" }, NOMBRE_APP);

/** Artículos publicados, del más nuevo al más viejo (una sola lectura por render). */
export const articulosPublicados = cache(async (): Promise<Articulo[]> => {
  const db = getFirestore(app);
  const snap = await getDocs(query(collection(db, COLECCION), where("publicado", "==", true)));
  return snap.docs
    .map((d) => ({ ...(d.data() as Omit<Articulo, "id">), id: d.id }))
    .sort((a, b) => b.fecha.localeCompare(a.fecha));
});

/** Artículos publicados que tienen versión en ese idioma. */
export async function articulosEn(idioma: Idioma) {
  return (await articulosPublicados()).filter((a) => a.textos[idioma]);
}

export async function articuloPorSlug(idioma: Idioma, slug: string) {
  return (await articulosEn(idioma)).find((a) => a.textos[idioma]!.slug === slug);
}
