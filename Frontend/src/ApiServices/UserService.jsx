import axios from "axios";
import { baseUrl } from "../utils/apis";

export const fetchAllUsersApi = async () => {
  const response = await axios.get(baseUrl + "/user/all");

  return response.data;
};

export const fetchUserByIdApi = async (id) => {
  const response = await axios.get(baseUrl + "/user/singleUser" + id);

  return response.data;
};

export const postNewUserApi = async (data) => {
  try{
  const response = await axios.post(baseUrl + "/user/new", data);
  return response.data
  } catch(error){
    console.log(error.response.data.message)
    return error.response.data.message
  }
};

export const deleteUserApi = async (id) => {
  const response = await axios.delete(baseUrl + "/user/singleUser" + id);

  return response.data;
};

export const loginUserApi = async (data) => {
  const response = await axios.post(baseUrl + "/user/login", data, {
    withCredentials: true,
  });

  return response.data;
};

export const logoutUserApi = async () => {
  try {
    const response = await axios.get(baseUrl + "/user/logout", {
      withCredentials: true,
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
