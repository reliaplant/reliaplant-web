import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import app, { secondaryApp } from "./firebaseConfig"; // Importación predeterminada



const db = getFirestore(app);
export const functions = getFunctions(app);
export const auth = getAuth(app);

export const secondaryDb = getFirestore(secondaryApp);
export const secondaryAuth = getAuth(secondaryApp);
export const secondaryFunctions = getFunctions(secondaryApp);

export default db;