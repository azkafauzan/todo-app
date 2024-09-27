import { FormState } from "@/types/auth"
import { registerValidation } from "@/validations/auth"

export async function register(state: FormState, formData: FormData) {
  const result = registerValidation.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  })
  if (!result.success) return { errors: result.error.flatten().fieldErrors }
}
