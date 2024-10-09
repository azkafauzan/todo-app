import "server-only"
import { prisma } from "@/libs/prisma"
import { verifySession } from "@/libs/session"
import { cache } from "react"

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null
  try {
    const user = await prisma.user.findMany({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    })
    return user
  } catch (e) {
    console.log(e)
    return null
  }
})
