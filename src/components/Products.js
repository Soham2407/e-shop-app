import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const limit = 10;

  const getProducts = async (skip) => {
    try {
      setLoading(true);
      let url;
      if (state?.selectedCategory) {
        url = `https://dummyjson.com/products/category/${state?.selectedCategory}?limit=${limit}&skip=${skip}`;
      } else {
        url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      }
      const res = await axios.get(url);
      setProducts(res?.data?.products);
      setLoading(false);
      setPageCount(Math.ceil(res?.data?.total / limit));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(skip);
  }, [skip]);

  const handlePageClick = (data) => {
    const page = data?.selected;
    const skipValue = limit * page;
    setSkip(skipValue);
  };

  return (
    <div className="mt-2">
      {loading ? (
        <div className="min-h-[35rem] flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex gap-6 flex-wrap min-h-80">
          {products.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      )}
      <div className="mt-5">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          containerClassName="flex justify-end items-center gap-2"
          pageClassName="border flex justify-center items-center text-blue-500 pointer-cursor"
          pageLinkClassName="block px-3 py-1"
          previousClassName="px-2 py-1 bg-blue-500 text-white"
          nextClassName="px-2 py-1 bg-blue-500 text-white"
          breakClassName="border flex justify-center items-center text-blue-500 pointer-cursor"
          breakLinkClassName="block px-3 py-1"
          activeClassName="bg-blue-500 text-white"
          activeLinkClassName="bg-blue-500 text-white"
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Products;
