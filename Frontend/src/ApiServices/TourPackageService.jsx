import axios from "axios";
import { baseUrl } from "../utils/apis";

export const fetchAllTourPackagesApi = async () => {
  const response = await axios.get(baseUrl + "/tour-package/all");

  return response.data;
};

export const fetchTourPackagesByIdApi = async (id) => {
  const response = await axios.get(baseUrl + "/tour-package/" + id);

  return response.data;
};

export const postNewTourPackageApi = async (data) => {
  const response = await axios.post(baseUrl + "/tour-package/new", data);

  return response.data;
};

export const deleteTourPackageApi = async (id) => {
  const response = await axios.delete(baseUrl + "/tour-package/" + id);

  return response.data;
};
