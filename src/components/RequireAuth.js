import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <div>LOADING</div>;
  }
  if (!user) {
    toast.error("Please login first.", {
      id: "noAuthenticationErr",
    });
    return navigate("/login");
  }

  return children;
};

export default RequireAuth;
