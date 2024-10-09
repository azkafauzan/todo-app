import { prisma } from "@/libs/prisma"
import { creteSession } from "@/libs/session"
import { FormState } from "@/types/auth"
import { loginValidation, registerValidation } from "@/validations/auth"
import { compare, genSalt, hash } from "bcrypt"

export async function register(state: FormState, formData: FormData) {
  const result = registerValidation.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  })
  if (!result.success) return { errors: result.error.flatten().fieldErrors }
  const { username, email } = result.data
  const salt = await genSalt(10)
  const password = await hash(result.data.password, salt)
  const data = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  })
  await creteSession(data.id)
}

export async function login(state: FormState, formData: FormData) {
  const validatedFields = loginValidation.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  })
  const errorMessage = { message: "Invalid login credentials." }
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Query the database for the user with the given email
  const user = await prisma.user.findUnique({
    where: {
      username: validatedFields.data.username,
    },
  })

  // If user is not found, return early
  if (!user) {
    return errorMessage
  }
  // 3. Compare the user's password with the hashed password in the database
  const match = await compare(validatedFields.data.password, user.password)

  // If the password does not match, return early
  if (!match) {
    return errorMessage
  }

  // 4. If login successful, create a session for the user and redirect
  await creteSession(user.id)
}
