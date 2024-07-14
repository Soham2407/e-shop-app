import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../utils/api";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    const res = await getSingleProduct(id);
    setProduct(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full flex mt-5">
      <div className="basis-[35%]">
        <div className="border w-[25rem] h-[20rem] mx-auto">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex ml-16 mt-4 flex-wrap gap-4">
          {product?.images?.length > 0 &&
            product?.images?.map((imgs, index) => (
              <img
                key={index}
                src={imgs}
                className="w-20 h-20 object-cover border"
              />
            ))}
        </div>
      </div>
      <div className="basis-[65%]">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="mt-1">{product.brand}</p>
        <p className="mt-1">{product.availabilityStatus}</p>
        <div className="flex items-center gap-1 mt-2">
          <FaStar size="1.4em" className="text-yellow-400 inline-block" />
          <span>{product.rating} out of 5</span>
        </div>
        <p className="mt-2">{product.description}</p>
        <p className="font-semibold text-xl mt-2">${product.price}</p>
        <button className="px-3 py-2 bg-purple-600 text-white rounded-md mt-2 hover:bg-purple-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
