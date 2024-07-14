import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (selectedCategory) => {
  try {
    let url;
    if (selectedCategory) {
      url = `https://dummyjson.com/products/category/${selectedCategory}?limit=10`;
    } else {
      url = "https://dummyjson.com/products?limit=10";
    }
    const res = await axios.get(url);
    return res?.data?.products;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
