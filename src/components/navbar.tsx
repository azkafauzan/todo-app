import Link from "@/components/Link"

export default function Navabar() {
  return (
    <nav className="w-full h-12 border-b-2 border-light-secondary flex items-center px-[10%] justify-between fixed top-0 bg-inherit">
      <Link href={"/"} raw>
        <h1 className="font-semibold text-3xl text-dark-secondary">Todo App</h1>
      </Link>
      <section className="flex gap-2">
        <Link href="/login">login</Link>
        <Link href="/register">Register</Link>
      </section>
    </nav>
  )
}
