import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";
import { addToDb } from "../utilities/fakedb";

const Shop = ({ products, setItemsFromDb }) => {
  const [user, loading] = useAuthState(auth);

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
                  if (!user) {
                    toast.error("Please login first.", {
                      id: "requireAuthErr",
                    });
                    return;
                  }
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
