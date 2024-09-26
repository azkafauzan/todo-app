import type { InputProps } from "@/types/props"
import { useId } from "react"
export default function Input({ children, ...rest }: InputProps) {
  const id = `${useId()}-${children?.toString().replace(" ", "-")}`
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input type={rest.type ? rest.type : "text"} id={id} {...rest} />
    </div>
  )
}
