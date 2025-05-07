import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const loginAdmin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

export const isUserLoggedIn = (): boolean => {
  return auth.currentUser !== null;
};

export const createAdminAccount = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Actualizar el perfil con el nombre del administrador
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const setUserAsAdmin = async (email: string) => {
  try {
    await setDoc(doc(db, "admins", email), {
      role: "admin",
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    throw error;
  }
};
