import { LinkProps as NextLinkProps } from "next/link"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  type: React.InputHTMLAttributes<HTMLInputElement>["type"]
}
export interface LinkProps extends NextLinkProps {
  children: React.ReactNode
  raw?: boolean
}
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}
