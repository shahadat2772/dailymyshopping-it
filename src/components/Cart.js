import React, { useEffect } from "react";
import {
  getCart,
  addToDb,
  removeFromDb,
  removeByOne,
} from "../utilities/fakedb";

const Cart = ({ cart, setItemsFromDb }) => {
  let totalPrice = 0;
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalPrice = item.price * item.quantity + totalPrice;
    totalQuantity = item.quantity + totalQuantity;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {cart.length !== 0 ? (
        <div className="cartContainer max-w-[600px] mx-auto mt-16">
          {cart.map((item) => (
            <div className="eachItem bg-blue-100 py-3 px-3 mb-2 rounded flex items-center">
              <img
                className="h-[50px] rounded w-[50px]"
                src={item.img}
                alt=""
              />
              <h2 className="ml-2">{item.name}</h2>
              <div className="ml-auto">
                <h2 className="text-center mb-2 text-xl">
                  <span className="text-sm">$</span>
                  {item.quantity * item.price}
                </h2>
                <div className="flex align-center">
                  <i
                    onClick={() => {
                      removeByOne(item.id);
                      setItemsFromDb();
                    }}
                    class="fa-solid fa-circle-minus text-primary cursor-pointer text-xl"
                  ></i>
                  <span className="bg-white mx-2 px-2 rounded">
                    {item.quantity}
                  </span>{" "}
                  <i
                    onClick={() => {
                      addToDb(item.id);
                      setItemsFromDb();
                    }}
                    class="fa-solid fa-circle-plus text-primary cursor-pointer text-xl"
                  ></i>
                </div>
              </div>
            </div>
          ))}
          <h2 className="text-center text-2xl mt-6 mb-3">
            Subtotal <span className="text-sm">$</span>
            {totalPrice}
          </h2>
          <button className="btn btn-primary text-white w-[80%] block mx-auto">
            Proceed to buy
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[90vh]">
          <h2 className="text-2xl">Not items added yet :(</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
