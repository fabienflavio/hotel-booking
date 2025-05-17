import axios from "axios";
import { IP } from "../../API/IP";

export const AddPayement = async (dataFrom : any,token : string) => {
    const response = await axios.post(`${IP}/payment`,dataFrom , {
      headers : {
        authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  };