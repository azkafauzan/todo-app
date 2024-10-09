import "server-only"
import { SessionPayload } from "@/types/auth"
import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const key = new TextEncoder().encode(process.env.JWT_SECRET)

export const encrypt = async (payload: SessionPayload) =>
  new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(60 * 60 * 24)
    .sign(key)
export const decrypt = async (session: string = "") => {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    })
    return payload
  } catch (e: any) {
    console.log(e.message)
    return null
  }
}

export const creteSession = async (userId: number) => {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000)
  const session = await encrypt({ userId, expiresAt })
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
  redirect("/dashboard")
}

export const verifySession = async () => {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)
  if (!session?.userId) {
    redirect("/login")
  }

  return { isAuth: true, userId: Number(session.userId) }
}
