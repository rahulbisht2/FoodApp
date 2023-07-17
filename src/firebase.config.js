import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCs3W57qEXjx50WTdP0-LNYGaeMi_VH0xI",
  // authDomain: "resturantapp-1d33d.firebaseapp.com",
  // databaseURL: "https://resturantapp-1d33d-default-rtdb.firebaseio.com",
  // projectId: "resturantapp-1d33d",
  // storageBucket: "resturantapp-1d33d.appspot.com",
  // messagingSenderId: "1068018528588",
  // appId: "1:1068018528588:web:03cc6a544d0e90f1b6dfe9"

  apiKey: "AIzaSyCmYVQIFX00_N4FIRhjn2bSmTdORO7L8kI",
  authDomain: "restaurantapp-6f73d.firebaseapp.com",
  databaseURL: "https://restaurantapp-6f73d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6f73d",
  storageBucket: "restaurantapp-6f73d.appspot.com",
  messagingSenderId: "783314233882",
  appId: "1:783314233882:web:52515fa3e8ef42dd723fa3"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };