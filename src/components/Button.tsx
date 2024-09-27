interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

export default function Button({ children, type = "button", ...rest }: ButtonProps) {
  const style: Record<string, string> = {
    button: "bg-dark-primary text-light-primary px-2 py-1 rounded-lg",
    submit: "bg-dark-primary text-light-primary p-2 rounded-lg hover:bg-dark-secondary active:bg-white active:outline active:outline-2 active:outline-light-secondary active:text-dark-primary",
  }
  return (
    <button type={type} {...rest} className={style[type]}>
      {children}
    </button>
  )
}
