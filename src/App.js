import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import p1 from "../src/productsimg/product-1.jpg";
import p2 from "../src/productsimg/product-2.jpg";
import p3 from "../src/productsimg/product-3.jpg";
import { getCart, addToDb, removeFromDb } from "../src/utilities/fakedb";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Rubik's cube", img: p1, price: 34, id: 1 },
    { name: "Mastermorphix", img: p2, price: 18, id: 2 },
    { name: "Mirror puzzle", img: p3, price: 39, id: 3 },
  ];

  // Setting the cart items from local storage
  const setItemsFromDb = () => {
    let savedItems = [];
    const savedProducts = getCart();
    for (const id in savedProducts) {
      const savedItem = products.find((product) => product.id == id);
      if (savedItem) {
        let quantity = savedProducts[id];
        savedItem["quantity"] = quantity;
        savedItems.push(savedItem);
      }
    }
    setCart(savedItems);
  };

  useEffect(() => {
    setItemsFromDb();
  }, []);

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
                <Shop setItemsFromDb={setItemsFromDb} products={products} />
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart cart={cart} setItemsFromDb={setItemsFromDb} />
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
