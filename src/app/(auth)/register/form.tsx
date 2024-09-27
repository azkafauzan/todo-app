"use client"
import Button from "@/components/Button"
import Form from "@/components/Form"
import { register } from "@/actions/auth"
import Input from "@/components/Input"
import { useFormState } from "react-dom"

export default function FormRegister() {
  const [state, action] = useFormState(register, undefined)
  console.log(state)
  return (
    <Form action={action}>
      <Input type="text" name="username">
        username
      </Input>
      {state?.errors.username && <Err>{state.errors.username}</Err>}
      <Input type="email" name="email">
        email
      </Input>
      {state?.errors.username && <Err>{state.errors.email}</Err>}
      <Input type="password" name="password">
        password
      </Input>
      {state?.errors.username && <Err>{state.errors.password}</Err>}
      <Input type="password" name="confirmPassword">
        confirmPassword
      </Input>
      {state?.errors.username && <Err>{state.errors.confirmPassword}</Err>}
      <Button type="submit">Register</Button>
    </Form>
  )
}

const Err = ({ children }: { children: React.ReactNode }) => <p className="-my-4">{children}</p>
