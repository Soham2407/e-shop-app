import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./shimmer/ShimmerCard";
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
    <div>
      {!loading && (
        <div className="flex justify-end mb-2">
          <Link
            to="/products"
            state={{ selectedCategory }}
            className="text-lg hover:underline"
          >
            View All
          </Link>
        </div>
      )}

      {loading ? (
        <div className="flex gap-6 flex-wrap">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      ) : (
        <div className="flex gap-6 flex-wrap">
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
