import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const HomeProducts = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      let url;
      if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=10`;
      } else {
        url = "https://dummyjson.com/products?limit=10";
      }
      const res = await axios.get(url);
      setProducts(res?.data?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();

    return () => setProducts([]);
  }, [selectedCategory]);

  return (
    <div className=" max-w-[1360px] mx-auto">
      {!loading && (
        <div className="flex justify-end mr-8 mb-2">
          <Link to="/products" className="text-lg hover:underline">
            View All
          </Link>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-8 flex-wrap">
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
