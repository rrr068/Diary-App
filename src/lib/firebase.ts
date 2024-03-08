import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLRBtoCx_nc4Xz4dH4VK_E7zrDO-Qz01I",
  authDomain: "short-diary-ab3f1.firebaseapp.com",
  projectId: "short-diary-ab3f1",
  storageBucket: "short-diary-ab3f1.appspot.com",
  messagingSenderId: "139150951988",
  appId: "1:139150951988:web:f6791156fe4a7d7888ec61"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
 const storage = getStorage(app);

 export { auth, db, storage }