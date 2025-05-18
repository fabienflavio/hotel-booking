import axios from "axios";
import { IP } from "./IP";
import { ResetPasswordType } from "../Components/typescript/Auth";
import { User } from "../Validation/Auth";
import { addPhoneType } from "../Components/typescript/AddphoneNumber";

export const AddphoneNumberAuth = async (dataFrom : addPhoneType,id : number,token : string) => {
  const response = await axios.put(IP + `/users/update/${id}`,dataFrom, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const loginAuth = async (dataFrom : User) => {
  const response = await axios.post(IP + '/login',dataFrom);
  return response.data;
};

export const loginAuthGoogle = async (dataFrom : User) => {
  const response = await axios.post(IP + '/google-user/login',dataFrom);
  return response.data;
};

export const registerAuth = async (newUser : User) => {
  const response = await axios.post(IP + '/register',newUser);
  return response.data
};


export const ForgotPasswordAuth = async (newUser : User) => {
  const response = await axios.post(IP + '/forgot-password',newUser  );
  return response.data
};

export const resetPasswordAuth = async (newUser : ResetPasswordType ) => {
  const response = await axios.post(IP + '/reset-password',newUser);
  return response.data
};