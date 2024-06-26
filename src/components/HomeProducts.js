import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeProducts = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let url;
      if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=12`;
      } else {
        url = "https://dummyjson.com/products?limit=12";
      }
      const res = await axios.get(url);
      console.log(res);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  return (
    <div className="flex gap-4 flex-wrap max-w-[1360px] mx-auto">
      {products.map((product) => (
        <div
          className="w-52 border shadow-md overflow-hidden rounded-md"
          key={product.id}
        >
          <div className="w-full h-44">
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2">
            <h2>{product.title}</h2>
            <p className="font-semibold text-lg">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
