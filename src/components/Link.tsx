import { LinkProps } from "@/types/props"
import NextLink from "next/link"

export default function Link({ children, raw = false, ...rest }: LinkProps) {
  const className = raw ? "" : "bg-dark-primary text-light-primary px-2 py-[2px] rounded-lg hover:bg-light-primary text-lg hover:text-dark-primary hover:outline hover:outline-1 hover:outline-light-secondary transition-all duration-150"
  return (
    <NextLink {...rest} className={className}>
      {children}
    </NextLink>
  )
}
