
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBev6deOvNy-5wP0-UpDK75pgH2sQlGqdI",
  authDomain: "media-61a95.firebaseapp.com",
  projectId: "media-61a95",
  storageBucket: "media-61a95.appspot.com",
  messagingSenderId: "540304737415",
  appId: "1:540304737415:web:86ab5dc86dffe98cbfe422"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };