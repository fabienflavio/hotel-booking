import axios from "axios";
import { Commentaire } from "../typescript/Commentaire";
import { IP } from "../../API/IP";

export const AddCommentaire = async (dataFrom : Commentaire) => {
    const response = await axios.post(IP + '/contacts/store',dataFrom
    );
    return response.data;
  };

  export const getCommentaire = async () => {
    const response = await axios.get(IP + '/contacts');
    return response.data;
  };