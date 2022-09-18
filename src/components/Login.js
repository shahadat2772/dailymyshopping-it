import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    toast.error(error.message, {
      id: "signInErr",
    });
  }

  if (user) {
    toast.success("Signed in successfully.", {
      id: "signInToast",
    });
    navigate("/shop");
  }

  return (
    <div className="loginContainer flex justify-center items-center h-[88vh]">
      <form onSubmit={(e) => handleSignUp(e)} className="form p-10" action="">
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
          value="Sign up"
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
