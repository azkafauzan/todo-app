import type { InputProps } from "@/types/props"
import { useId } from "react"
export default function InputText({ children, type, ...rest }: InputProps) {
  const id = `${useId()}-${children?.toString().replace(" ", "-")}`
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg font-semibold capitalize">
        {children} <span className="text-red-600 text-base">{rest.required ? "*" : ""}</span>
      </label>
      <input type={type} id={id} {...rest} className="border-2 border-light-secondary rounded-md px-2 py-1 active:border-dark-primary" autoComplete="off" />
    </div>
  )
}
