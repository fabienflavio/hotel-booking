import axios from "axios";
import { IP } from "./IP";

export const fetchChambre = async ( ) => {
    const response = await axios.get(`${IP}/rooms`,);
    return response.data;
}

export const fetchOneId = async (id : number  ) => {
    const res = await axios.get(`${IP}/rooms/show/${id}`)
    return res.data;
}
  
export const fetchChambreInfinitepage = async (token: string) => {
    const res = await axios.get(`${IP}/rooms`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return res.data.data
}

export const deleteChambre = async (id: number, token: string) => {
    const response = await axios.delete(`${IP}/rooms/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

export const updateChambre = async (formData: FormData, id: string, token: string) => {
  const response = await axios.post(`${IP}/rooms/update/${id}`, formData, {
    headers: {
      contentType: "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export  const addRoms = async (formData: FormData,token : string) => {
    try {
      const response = await axios.post(`${IP}/rooms/store`, formData, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la chambre:', error);
      throw error;
    }
};