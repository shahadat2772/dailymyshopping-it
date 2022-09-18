import React, { useEffect, useState } from "react";
import p1 from "../productsimg/product-1.jpg";
import p2 from "../productsimg/product-2.jpg";
import p3 from "../productsimg/product-3.jpg";
import { getCart, addToDb, removeFromDb } from "../utilities/fakedb";

const Shop = ({ setCart }) => {
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
    <div className="productsContainer max-w-7xl mx-auto grid gap-6 px-2 grid-cols-2 lg:grid-cols-3 md:grid-cols-3 justify-items-center mt-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="card rounded-lg card-compact lg:w-96 md:w-96 bg-base-100 shadow"
        >
          <figure>
            <img
              className="w-[200px] h-[200px]"
              src={product.img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}!</h2>
            <h2 className="text-right font-medium">
              only at <span className="text-4xl">${product.price}</span>
            </h2>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  addToDb(product.id);
                  setItemsFromDb();
                }}
                className="btn btn-primary w-full text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
