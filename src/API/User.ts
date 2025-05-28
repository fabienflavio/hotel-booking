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
    console.log("token user",token)
    const response = await axios.put( IP + "/users/update/" + id , newUser , {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    console.log(response , "Response")
    return response.data
};