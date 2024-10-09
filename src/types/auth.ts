export type FormState =
  | {
      errors?: {
        username?: string[]
        email?: string[]
        password?: string[]
        confirmPassword?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
  userId: string | number
  expiresAt: Date
}
