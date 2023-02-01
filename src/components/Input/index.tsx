import { InputHTMLAttributes } from 'react'
import { InputContainer, InputContent } from './styles'

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Input({ label, ...props }: InputPropsType) {
  return (
    <InputContainer>
      <div>
        <label htmlFor={label}>{label}</label>
        <span>This field is required</span>
      </div>
      <InputContent hasError={false} id={label} {...props} />
    </InputContainer>
  )
}
