import React from "react";
import p1 from "../productsimg/product-1.jpg";
import p2 from "../productsimg/product-2.jpg";
import p3 from "../productsimg/product-3.jpg";

const Shop = () => {
  const products = [
    { name: "Rubik's cube", img: p1, price: 34, id: 1 },
    { name: "Mastermorphix", img: p2, price: 18, id: 2 },
    { name: "Mirror puzzle", img: p3, price: 39, id: 3 },
  ];

  return (
    <div className="productsContainer max-w-7xl mx-auto grid grid-cols-3 justify-items-center mt-12">
      {products.map((product) => (
        <div className="card rounded-lg card-compact w-96 bg-base-100 shadow">
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
              <button className="btn btn-primary w-full text-white">
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
