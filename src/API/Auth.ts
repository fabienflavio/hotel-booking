import axios from "axios";
import { IP } from "./IP";
import { User } from "../Validation/Auth";
import { ResetPasswordType } from "../Components/typescript/Auth";

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