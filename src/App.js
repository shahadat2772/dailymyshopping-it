import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Navbar />
      <div className="">
        <Routes>
          <Route
            path="/shop"
            element={
              <RequireAuth>
                <Shop />
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
