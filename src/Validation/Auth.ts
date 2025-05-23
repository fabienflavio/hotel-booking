import { z }  from "zod"

export const registerSchema = z.object({
    id : z.number().optional(),
    name: z.string().min(1, "Name is required 🔺"),
    email: z.string().email("Invalid email address 🔺"),
    phone: z.string().min( 8,"8 caractere minim in phone number 🔺"),
    password: z.string().min(8, "Password must be at least 8 characters long 🔺"),
    role : z.string().optional(),
    password_confirmation: z.string().min(8, "Password must be at least 8 characters long 🔺"),
});

export const loginSchema = z.object({
  password: z.string().min(8, "Password must be at least 6 characters long 🔺"),
  email: z.string().email("Invalid email address 🔺"),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address 🔺"),
});

export const addPhoneNumberSchema = z.object({
  phone: z.string().min(1,"phone is required  🔺"),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long 🔺"),
  password_confirmation: z.string().min(8, "Password must be at least 8 characters long 🔺"),
});

export type User = z.infer<typeof registerSchema>;