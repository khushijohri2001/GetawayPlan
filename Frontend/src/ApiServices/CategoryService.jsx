import axios from "axios";
import { allCategoriesApi, categoryByIdApi, newCategoryApi } from "../utils/apis";

export const fetchAllCategoriesApi = async () => {
  const response = await axios.get(allCategoriesApi);
  
  return response.data;
};

export const fetchCategoryByIdApi = async (id) => {
    const response = await axios.get(categoryByIdApi(id));
    
    return response.data;
  };

  export const postNewCategoryApi = async (data) => {
    const response = await axios.post(newCategoryApi, data);
    
    return response.data;
  };

  export const deleteCategoryApi = async (id) => {
    const response = await axios.delete(categoryByIdApi(id));
    
    return response.data;
  };