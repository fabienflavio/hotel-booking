import axios from "axios";
import { IP } from "./IP";
import { User } from "../Validation/Auth";

export const getAllUsers = async (token : string) => {
    const res = await axios.get(`${IP}/users`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data
}

export const EditUser = async (newUser: User,id : number,token: string) => {
    const response = await axios.put( IP + "/users/" + id , newUser , {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data
};