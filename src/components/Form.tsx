import type { FormProps } from "@/types/props"
export default function Form({ children, action, ...rest }: FormProps) {
  return (
    <form action={action} {...rest} className="w-[500px] bg-white border-2 border-light-secondary px-8 py-4 flex flex-col rounded-xl gap-4">
      {children}
    </form>
  )
}
