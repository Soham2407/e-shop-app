import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./shimmer/ShimmerCard";
import { Link } from "react-router-dom";
import { getProducts } from "../utils/api";

const HomeProducts = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const products = await getProducts(selectedCategory);
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();

    return () => setProducts([]);
  }, [selectedCategory]);

  return (
    <div>
      {!loading && (
        <div className="flex justify-end ">
          <Link
            to="/products"
            state={{ selectedCategory }}
            className="view-btn"
          >
            View All
          </Link>
        </div>
      )}

      {loading ? (
        <div className="flex gap-6 flex-wrap mt-4">
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
        <div className="flex gap-6 flex-wrap mt-4">
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
