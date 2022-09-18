import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return (
    <div className="loginContainer flex justify-center items-center h-[88vh]">
      <form className="form p-10" action="">
        <input
          placeholder="Email"
          className="h-[40px] rounded p-1 w-full block mt-3 mx-auto"
          type="email"
          id="email"
        />
        <input
          placeholder="Password"
          className="h-[40px] rounded p-1 w-full block mt-3 mx-auto"
          type="password"
          id="password"
        />

        <input
          className="h-[40px] w-full block mt-3 fromSubmitButton mx-auto btn btn-sm btn-primary text-white"
          type="submit"
          value="Login"
        />
        <Link
          to={"/signUp"}
          className="block text-sm text-center mt-3 text-white cursor-pointer hover:text-info duration-500"
        >
          Don't have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
