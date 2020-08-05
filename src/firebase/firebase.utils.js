import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzUXvd2U9AkacKssthpsJn0hNInWWElNg",
  authDomain: "clothing-store-db-54273.firebaseapp.com",
  databaseURL: "https://clothing-store-db-54273.firebaseio.com",
  projectId: "clothing-store-db-54273",
  storageBucket: "clothing-store-db-54273.appspot.com",
  messagingSenderId: "898402707517",
  appId: "1:898402707517:web:6338311bf50be9df5d2254",
  measurementId: "G-N2YFY5GQ8X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
