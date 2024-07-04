import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeProducts from "./HomeProducts";
import ShimmerCategories from "./shimmer/ShimmerCategories";

const HomeContent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("");
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex overflow-x-auto gap-6 scrollbar py-4 cursor-pointer">
        {loading ? (
          <ShimmerCategories />
        ) : (
          <>
            <div
              className="w-fit px-3 py-2 rounded-md hover:bg-orange-500 text-white bg-slate-600 flex justify-center items-center shrink-0"
              onClick={() => setSelectedcategory("")}
            >
              <p className="text-center text-sm font-semibold">All</p>
            </div>
            {categories?.map((category, index) => (
              <div
                key={index}
                className="w-fit px-3 py-2 rounded-md hover:bg-orange-500 text-white  bg-slate-600  flex justify-center items-center shrink-0"
                onClick={() => setSelectedcategory(category.slug)}
              >
                <p className="text-center text-sm font-semibold">
                  {category.name}
                </p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-4">
        <HomeProducts selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default HomeContent;
