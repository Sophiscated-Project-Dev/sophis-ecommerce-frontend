import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// The Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlB4SU2GDUQElXiGuo6Ke0F-FUwnvUSk",
  authDomain: "sophis-mart.firebaseapp.com",
  projectId: "sophis-mart",
  storageBucket: "sophis-mart.appspot.com",
  messagingSenderId: "925268401396",
  appId: "1:925268401396:web:9a5802de13796699e952a1",
};

// Initialize Firebase
// app = All firebase connections
const app = initializeApp(firebaseConfig);

// auth = user currently authenticated in firebase
export const auth = getAuth(app);

export const googleProv = new GoogleAuthProvider();

// Sign in for google
export const logInWithGoogle = () => {
  signInWithPopup(auth, googleProv)
    .then((result) => {
      //   const name = result.user.displayName;
      //   const email = result.user.email;
      console.log("logged in successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
