import axios from "axios";
import { IP } from "./IP";
import { BookType } from "../Validation/Book";

export const fetchBooks = async (token: string) => {
    const res = await axios.get(`${IP}/books`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return res.data
}

export const addReservation = async (token: string, newUser: BookType) => {
    const response = await axios.post(`${IP}/books/store`, newUser, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  };