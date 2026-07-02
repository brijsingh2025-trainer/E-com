import axios from "axios";

const PRODUCT_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await axios.get(PRODUCT_URL);
  return response.data;
};

