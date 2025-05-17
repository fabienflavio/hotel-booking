import axios from "axios";
import { IP } from "./IP";

export const fetchClass = async (token : string) => {
    const res = await axios.get(`${IP}/classes`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data
}
