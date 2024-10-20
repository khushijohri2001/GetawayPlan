import axios from "axios";
import { baseUrl } from "../utils/apis";

export const fetchAllDestinationsApi = async () => {
  const response = await axios.get(baseUrl + "/destination/all");

  return response.data;
};

export const fetchDestinationByIdApi = async (id) => {
  const response = await axios.get(baseUrl + "/destination/" + id);

  return response.data;
};

export const postNewDestinationApi = async (data) => {
  const response = await axios.post(baseUrl + "/destination/new", data);

  return response.data;
};

export const deleteDestinationApi = async (id) => {
  const response = await axios.delete(baseUrl + "/destination/" + id);

  return response.data;
};
