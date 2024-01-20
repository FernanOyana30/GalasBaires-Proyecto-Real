import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "galas-baires",
  storageBucket: "galas-baires.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: "1:930077035982:web:86e727538f7ab43c87ef9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//--------------------------------

export async function createOrder(orderData){
  //console.log("todo ok", orderData)
  const collectionRef = collection(db, "orders")

  console.log(orderData)

  const response = addDoc(collectionRef, orderData)
  console.log(response)
  
}