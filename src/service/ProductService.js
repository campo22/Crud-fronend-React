import axios from "axios";

const initProducts = [
  {
    id: 1,
    name: "Macbook Pro",
    description: "Product 1 description",
    price: 2000,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 description",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 description",
    price: 300,
  },
];

const baseUrl = "http://localhost:8080/products";

export const listProduct = () => {
  return initProducts;
};

export const findAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};
export const create = async ({ name, description, price }) => {
  try {
    const response = await axios.post(baseUrl, {
      name,
      description,
      price,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const update = async ({ id, name, description, price }) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, {
      name,
      description,
      price,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const remove = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
