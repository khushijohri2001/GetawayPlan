import axios from "axios";
import { allTourPackagesApi, newTourPackageApi, tourPackageByIdApi } from "../utils/apis";

export const fetchAllTourPackagesApi = async () => {
  const response = await axios.get(allTourPackagesApi);
  
  return response.data;
};

export const fetchTourPackagesByIdApi = async (id) => {
    const response = await axios.get(tourPackageByIdApi(id));
    
    return response.data;
  };

  export const postNewTourPackageApi = async (data) => {
    const response = await axios.post(newTourPackageApi, data);
    
    return response.data;
  };

  export const deleteTourPackageApi = async (id) => {
    const response = await axios.delete(tourPackageByIdApi(id));
    
    return response.data;
  };