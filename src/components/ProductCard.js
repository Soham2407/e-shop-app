import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="w-52 border border-slate-600 cursor-pointer shadow-md transition duration-200 ease-in overflow-hidden rounded-md hover:scale-105"
    >
      <div className="w-full h-44">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <div>
          <h2>{product.title}</h2>
          <div className="flex items-center gap-1 mt-1">
            <FaStar size="1em" className="text-yellow-400 inline-block" />
            <span className="text-sm">{product.rating} out of 5</span>
          </div>
          <p className="font-semibold text-lg mt-1">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
