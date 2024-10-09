import { z } from "zod"

export const registerValidation = z
  .object({
    username: z.string().min(3, "username must contains atleast 3 characters").max(30, "username too long"),
    email: z.string().email("email is not valid"),
    password: z.string().min(8, "password must contains atleast 8 characters").max(30, "password too long"),
    confirmPassword: z.string().min(8, "confirm password must contains atleast 8 characters").max(30, "password too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password and confirm password does not match",
    path: ["confirmPassword"],
  })
export const loginValidation = z.object({
  username: z.string().min(3, "username must contains atleast 3 characters").max(30, "username too long"),
  password: z.string().min(8, "password must contains atleast 8 characters").max(30, "password too long"),
})
