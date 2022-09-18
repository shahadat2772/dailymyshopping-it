import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      {/* Nav */}
      <Navbar cart={cart} />
      <div className="">
        <Routes>
          <Route
            path="/shop"
            element={
              <RequireAuth>
                <Shop setCart={setCart} />
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart cart={cart} />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
