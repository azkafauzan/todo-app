interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export default function Form({ children, action, ...rest }: FormProps) {
  return (
    <form action={action} {...rest}>
      {children}
    </form>
  )
}
