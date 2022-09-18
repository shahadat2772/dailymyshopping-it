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

  if (loading) {
    toast.loading("About to redirect.", {
      id: "loginLoading",
    });
  }

  if (error) {
    toast.error(error.message, {
      id: "signInErr",
    });
  }

  if (user) {
    toast.dismiss("loginLoading");
    toast.success("Signed in successfully.", {
      id: "signInToast",
    });
    navigate("/shop");
  }

  return (
    <div className="loginContainer flex justify-center items-center h-[92vh]">
      <form
        onSubmit={(e) => handleSignUp(e)}
        className="form p-10 md:w-[400px] lg:w-[400px] w-[330px]"
        action=""
      >
        <input
          required
          placeholder="Email"
          className="h-[40px] rounded p-1 w-full block mt-3 mx-auto"
          type="email"
          id="email"
        />
        <input
          required
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
