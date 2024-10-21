import axios from "axios";
import { baseUrl } from "../utils/apis";

export const fetchAllBookingsApi = async () => {
  const response = await axios.get(baseUrl + "/booking/all");

  return response.data;
};

export const fetchBookingByIdApi = async (id) => {
  const response = await axios.get(baseUrl + "/booking/" + id);

  return response.data;
};

export const postNewBookingApi = async (data) => {
  const response = await axios.post(baseUrl + "/booking/new", data);

  return response.data;
};

export const deleteBookingApi = async (id) => {
  const response = await axios.delete(baseUrl + "/booking/" + id);

  return response.data;
};
