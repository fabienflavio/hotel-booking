import axios from "axios";
import { IP } from "../../API/IP";
import { BookType } from "../../Validation/Book";

export const fetchReservation = async (token: string) => {
    const res = await axios.get("http://localhost:3030/api/reservations", {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data.data
}
export const fetchReservationOnly = async (token: string,id:number) => {
    const res = await axios.get(`http://localhost:3030/api/reservations/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.data.data
}

export const addReservation = async (token: string, newUser: BookType) => {
    const response = await axios.post(`${IP}/books/store`, newUser, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  };
  

export const EditReservation = async (token: string, newUser: BookType,id : number) => {
    const response = await axios.put(`http://localhost:3030/api/reservations/${id}`, newUser, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data.data;
  };
  
