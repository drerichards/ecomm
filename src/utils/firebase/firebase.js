// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaJCpCWfWU9IhDZdSBjADHTr0ETH4lq1k",
  authDomain: "crwn-db-b7fb2.firebaseapp.com",
  databaseURL: "https://crwn-db-b7fb2.firebaseio.com",
  projectId: "crwn-db-b7fb2",
  storageBucket: "crwn-db-b7fb2.appspot.com",
  messagingSenderId: "476926460841",
  appId: "1:476926460841:web:bc9fda3ab7c0b02561bab8",
  measurementId: "G-PC08B9MLBT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const firebaseDb = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKeyName,
  objectsToAdd
) => {
  const collectionRef = collection(firebaseDb, collectionKeyName); // creates collection in db
  const batch = writeBatch(firebaseDb); // enables read/write methods to db

  objectsToAdd.forEach((object) => {
    // takes each object and adds it by lowercased title
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("objects added");
};

export const getCollectionAndDocuments = async (collectioKeyName) => {
  const collectionRef = collection(firebaseDb, "categories"); // gets collection in db
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  return querySnapshot.docs.map(doc => doc.data())
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additonalInfo = {}
) => {
  const userDocRef = doc(firebaseDb, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInfo,
      });
    } catch (error) {
      console.log("Error creating the user: ", error.message);
    }
  }

  return userDocRef;
};

export const createUserWithEmailAndPasswordFromAuth = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
