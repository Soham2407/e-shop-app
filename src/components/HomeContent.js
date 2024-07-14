import React, { useEffect, useState } from "react";
import HomeProducts from "./HomeProducts";
import ShimmerCategories from "./shimmer/ShimmerCategories";
import { getCategories } from "../utils/api";

const HomeContent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    const categories = await getCategories();
    setCategories(categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="flex overflow-x-auto gap-6 scrollbar py-4 cursor-pointer">
        {loading ? (
          <ShimmerCategories />
        ) : (
          <>
            <div
              className="w-fit px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white border-purple-500 border flex justify-center items-center shrink-0"
              onClick={() => setSelectedcategory("")}
            >
              <p className="text-center text-sm font-semibold">All</p>
            </div>
            {categories?.map((category, index) => (
              <div
                key={index}
                className="w-fit px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white border-purple-500 border flex justify-center items-center shrink-0"
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
