import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [message, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    console.log(
      "handle button click",
      password.current.value,
      email.current.value
    );
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    console.log("isSign in", isSigninForm);

    if (!isSigninForm) {
      //Sign up logic
      console.log("values", auth, email.current.value, password.current.value);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/C5103AQHYQB8F8H4_1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1527935097205?e=1729728000&v=beta&t=4rJmCUbwyFaNYc67OYbLddMf2yMytSr-sNZ_QUqJ9no",
          })
            .then(() => {
              // Need to dispatch actoin and update profile also
              // Profile updated!
              const {uid, displayName, photoURL, email} = auth.currentUser;
              dispatchEvent(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Signin Logic
      console.log(
        "signInWithEmailAndPassword",
        auth,
        email.current.value,
        password.current.value
      );
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("USERS", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        className="absolute p-14 bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-70 rounded-lg font-bold text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="py-4">{isSigninForm ? "Sign In" : "Sign up"}</h2>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your complete name Divija "
            className="p-4 my-4 w-full bg-slate-700 font-light"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="email Address"
          className="p-4 my-4 w-full bg-slate-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-slate-700 font-light"
        ></input>
        <p className="text-red-700 font-bold text-lg p-2">{message}</p>

        <button
          className="p-4 my-6 bg-red-600 w-full"
          onClick={(event) => handleButtonClick(event)}
        >
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSigninForm}>
          {isSigninForm
            ? "New to Netlix? Sign up Now"
            : "Already Registered !! Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
