import axios from "axios";
import { Commentaire } from "../typescript/Commentaire";

export const AddCommentaire = async (dataFrom : Commentaire,token : string) => {
    const response = await axios.post('http://localhost:3030/api/commentaire',dataFrom,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  export const getCommentaire = async (token : string) => {
    const response = await axios.get('http://localhost:3030/api/commentaire',
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  };