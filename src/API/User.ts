import axios from "axios";
import { IP } from "./IP";

export const getAllUsers = async (token : string) => {
    const res = await axios.get(`${IP}/users`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data
}
