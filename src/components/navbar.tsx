"use client"
import { useRouter } from "next/navigation"
import Button from "./Button"
import Link from "next/link"

export default function Navabar() {
  const router = useRouter()
  return (
    <nav className="w-full h-12 border-b-2 border-light-secondary flex items-center px-[10%] justify-between">
      <Link href={"/"}>
        <h1 className="font-semibold text-3xl text-dark-secondary">Todo App</h1>
      </Link>
      <section className="flex gap-2">
        <Button onClick={() => router.push("/login")}>Login</Button>
        <Button onClick={() => router.push("/register")}>Register</Button>
      </section>
    </nav>
  )
}
