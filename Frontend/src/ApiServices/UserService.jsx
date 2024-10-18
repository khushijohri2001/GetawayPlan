import axios from "axios";
import { allUsersApi, loginApi, logoutApi, newUserApi, userByIdApi } from "../utils/apis";

export const fetchAllUsersApi = async () => {
    const response = await axios.get(allUsersApi);

    return response.data;
};

export const fetchUserByIdApi = async (id) => {
    const response = await axios.get(userByIdApi(id));

    return response.data;
};

export const postNewUserApi = async (data) => {
    const response = await axios.post(newUserApi, data);

    return response.data;
};

export const deleteUserApi = async (id) => {
    const response = await axios.delete(userByIdApi(id));

    return response.data;
};

export const loginUserApi = async (data) => {
    const response = await axios.post(loginApi, data, {withCredentials:true});

    return response.data;
};

export const logoutUserApi = async () => {
    console.log("chla");
    
    try {
        const response = await axios.get("http://localhost:8800/user/logout",{withCredentials:true} );
        console.log("chla 2");
        
        return response.data;
    } catch (error) {
        console.log(error)
    }

};