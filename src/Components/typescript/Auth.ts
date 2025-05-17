import { User } from "../../Validation/Auth";

export type ResetPasswordType = User & {
    token: string;
    email: string;
};
  