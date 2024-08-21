import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
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
      <form className="absolute p-14 bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-70 rounded-lg font-bold text-white">
        <h2 className="py-4">{isSigninForm ? "Sign In" : "Sign up"}</h2>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Enter your complete name"
            className="p-4 my-4 w-full bg-slate-700 font-light"
          ></input>
        )}

        <input
          type="text"
          placeholder="email Address"
          className="p-4 my-4 w-full bg-slate-700"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-slate-700 font-light"
        ></input>
        <button className="p-4 my-6 bg-red-600 w-full">
          {" "}
          {isSigninForm ? "Sign In" : "Sign up"}{" "}
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
