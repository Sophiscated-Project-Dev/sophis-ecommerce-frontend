import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "../../../autharea/pages/Home";
import { useDispatch } from "react-redux";
import { clearState } from "../../features/user/userSlice";

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
      const name = result.user.displayName;
      const email = result.user.email;
      // return (
      //   <div>
      //     <p>{name}</p>
      //     <p>{email}</p>
      //   </div>
      // );

      // return useNavigate("/");

      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });

  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log("logged in successfully");
  //   // if (user === result.user) {
  //   //   dispatch(clearState());
  //   //   navigate("/");
  //   // }
  //   // ...
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log(errorMessage);
  // });
};
