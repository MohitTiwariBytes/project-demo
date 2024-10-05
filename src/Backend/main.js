// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"; // Realtime Database imports
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrzw7YoKDcR81DkO9qhDyXZo0fgva72-w",
  authDomain: "addtocartdemo-75124.firebaseapp.com",
  projectId: "addtocartdemo-75124",
  storageBucket: "addtocartdemo-75124.appspot.com",
  messagingSenderId: "982910157798",
  appId: "1:982910157798:web:cc4b5ee2318eb277610c27",
  measurementId: "G-GDKQTQXTCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize the Realtime Database

function generateUserToken() {
  const existingToken = localStorage.getItem("token");

  if (!existingToken) {
    const newToken = Math.random().toString(36).substring(2);
    localStorage.setItem("token", newToken);
    return newToken;
  }

  return existingToken;
}

export { database, generateUserToken };
