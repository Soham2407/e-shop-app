import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let url = "https://dummyjson.com/products?limit=10&skip=10";
      // if (selectedCategory) {
      //   url = `https://dummyjson.com/products/category/${selectedCategory}?limit=12`;
      // } else {
      //   url = "https://dummyjson.com/products?limit=12";
      // }
      const res = await axios.get(url);
      console.log(res);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-[1360px] mx-auto mt-2">
      <div className="flex gap-8 flex-wrap">
        {products.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
