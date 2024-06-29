import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-52 border border-slate-600 cursor-pointer shadow-md transition duration-200 ease-in overflow-hidden rounded-md hover:scale-105">
      <div className="w-full h-44">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 flex flex-col justify-between min-h-32">
        <div>
          <h2>{product.title}</h2>
          <p className="font-semibold text-lg">${product.price}</p>
        </div>
        <button className="bg-orange-400 text-white w-full py-1 text-center rounded-lg hover:bg-orange-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
