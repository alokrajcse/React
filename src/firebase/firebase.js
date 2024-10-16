// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA197-7ibTvLZjw-b_Fv6QughzhluOVM-I",
  authDomain: "chatbyme1.firebaseapp.com",
  databaseURL: "https://chatbyme1-default-rtdb.firebaseio.com",
  projectId: "chatbyme1",
  storageBucket: "chatbyme1.appspot.com",
  messagingSenderId: "837686420075",
  appId: "1:837686420075:web:cb78432d9ea2a8ca55872e",
  measurementId: "G-9009H89291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export {app,auth};