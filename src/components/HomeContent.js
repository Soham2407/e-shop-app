import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeProducts from "./HomeProducts";

const HomeContent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("");

  const getCategories = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(selectedCategory);

  return (
    <>
      <div className="flex overflow-x-auto gap-6 scrollbar py-4 cursor-pointer">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="w-[6rem] h-[6rem] bg-slate-100 p-2 rounded-full flex justify-center items-center shrink-0"
            onClick={() => setSelectedcategory(category.slug)}
          >
            <p className="text-center text-sm font-semibold">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <HomeProducts selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default HomeContent;
