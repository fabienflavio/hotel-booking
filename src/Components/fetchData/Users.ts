import axios from "axios";
import { User } from "../typescript/User";



export const EditUser = async (newUser: User,id : number,token: string) => {
    const response = await axios.put(`http://localhost:3030/api/users/${id}`, newUser , {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data
};

export const fetchUser = async (token: string) => {
    const res = await axios.get(`http://localhost:3030/api/users`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    return res.data.data
}