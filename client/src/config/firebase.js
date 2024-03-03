import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8kz6e7x8m1jScDcALNm8aKp7liColyNs",
  authDomain: "pdf-extracter-348e8.firebaseapp.com",
  projectId: "pdf-extracter-348e8",
  storageBucket: "pdf-extracter-348e8.appspot.com",
  messagingSenderId: "365641500031",
  appId: "1:365641500031:web:c5806f4960a389b805464a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export {app,auth,provider}