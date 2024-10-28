import axios from "axios";
import { baseUrl } from "../utils/apis";

export const fetchAllCategoriesApi = async () => {
  const response = await axios.get(baseUrl + "/category/all", {
    withCredentials: true,
  });

  return response.data;
};

export const fetchCategoryByIdApi = async (id) => {
  const response = await axios.get(baseUrl + "/category/" + id);

  return response.data;
};

export const postNewCategoryApi = async (data) => {
  const response = await axios.post(baseUrl + "/category/new", data, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteCategoryApi = async (id) => {
  const response = await axios.delete(baseUrl + "/category/" + id);

  return response.data;
};

export const updateCategoryApi = async (id, updatedData) => {
  const response = await axios.update(baseUrl + "/category/add-destination/" + id, updatedData);

  return response.data;
}
