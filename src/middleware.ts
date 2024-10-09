import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./libs/session"

const protectedRoutes = ["/dashboard"]
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoutes = protectedRoutes.includes(path)
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)
  if (isProtectedRoutes && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }
  return NextResponse.next()
}
