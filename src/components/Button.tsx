interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  background?: "dark" | "light"
}

export default function Button({ children, background = "dark", ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`bg-${background}-secondary text-${background === "dark" ? "light" : "dark"}-primary px-2 py-1 rounded-lg`}>
      {children}
    </button>
  )
}
