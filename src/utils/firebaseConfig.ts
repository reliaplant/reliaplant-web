// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzZQT2kqvYaabz0_cTcM9AEpb4aXk7tY",
  authDomain: "predyc2023.firebaseapp.com",
  databaseURL: "https://predyc2023-default-rtdb.firebaseio.com",
  projectId: "predyc2023",
  storageBucket: "predyc2023.appspot.com",
  messagingSenderId: "303790869910",
  appId: "1:303790869910:web:0d7f6295cf0ff3ac05e1b7",
  measurementId: "G-53KH3L09WW"
};

const secondaryFirebaseConfig = {
  apiKey: "AIzaSyAbKX7-hWRtxsXZt8U0XLsA43h2VKeyMHs",
  authDomain: "predycv3.firebaseapp.com",
  projectId: "predycv3",
  storageBucket: "predycv3.appspot.com",
  messagingSenderId: "817579003309",
  appId: "1:817579003309:web:687bd2708ec356d7652524",
  measurementId: "G-4VXZ220SCL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const secondaryApp = initializeApp(secondaryFirebaseConfig, "secondary");

export default app; // Exportación predeterminada