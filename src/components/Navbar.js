import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="normal-case text-xl">
            Daily<span className="text-primary">Shopping</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menuItems menu-horizontal p-0">
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-primary"
                    : "font-medium hover:text-primary duration-300"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="font-medium hover:text-primary duration-300"
                >
                  Log out
                </button>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-primary"
                      : "font-medium hover:text-primary duration-300"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
