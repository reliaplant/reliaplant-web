import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import { auth } from "./config";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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
    await setDoc(doc(db, "adminWeb", email), {
      role: "admin",
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    throw error;
  }
};

export interface AdminUser {
  email: string;
  displayName: string;
  role: string;
  createdAt: Date;
}

export const getAllAdmins = async (): Promise<AdminUser[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "adminWeb"));
    const admins: AdminUser[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      admins.push({
        email: doc.id,
        displayName: data.displayName || "",
        role: data.role,
        createdAt: data.createdAt?.toDate() || new Date(),
      });
    });
    return admins;
  } catch (error) {
    throw error;
  }
};

export const deleteAdmin = async (email: string) => {
  try {
    // Eliminar el documento de Firestore
    await deleteDoc(doc(db, "adminWeb", email));

    // Obtener el usuario actual
    const currentUser = auth.currentUser;

    if (currentUser?.email === email) {
      // Si es el usuario actual, eliminarlo directamente
      await deleteUser(currentUser);
    }
    // Si no es el usuario actual, no podemos eliminarlo desde el cliente
    // debido a restricciones de seguridad de Firebase. Esto requeriría
    // una función en el servidor (Cloud Function)

    return true;
  } catch (error) {
    throw error;
  }
};

export const updateAdmin = async (email: string, displayName: string) => {
  try {
    await updateDoc(doc(db, "adminWeb", email), {
      displayName: displayName,
      updatedAt: new Date(),
    });
    return true;
  } catch (error) {
    throw error;
  }
};
