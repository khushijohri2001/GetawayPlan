import axios from "axios";
import { allDestinationsApi, destinationByIdApi, newDestinationApi } from "../utils/apis";

export const fetchAllDestinationsApi = async () => {
  const response = await axios.get(allDestinationsApi);
  
  return response.data;
};

export const fetchDestinationByIdApi = async (id) => {
    const response = await axios.get(destinationByIdApi(id));
    
    return response.data;
  };

  export const postNewDestinationApi = async (data) => {
    const response = await axios.post(newDestinationApi, data);
    
    return response.data;
  };

  export const deleteDestinationApi = async (id) => {
    const response = await axios.delete(destinationByIdApi(id));
    
    return response.data;
  };