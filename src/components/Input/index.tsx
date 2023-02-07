import { InputHTMLAttributes } from 'react'
import { InputContainer, InputContent } from './styles'

type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function Input({ label, error, ...props }: InputPropsType) {
  return (
    <InputContainer hasError={!!error}>
      <div>
        <label htmlFor={label}>{label}</label>
        {!!error && <span>{error}</span>}
      </div>
      <InputContent id={label} {...props} />
    </InputContainer>
  )
}
