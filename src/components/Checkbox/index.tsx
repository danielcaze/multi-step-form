import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import Checkmark from '../../assets/images/icon-checkmark.svg'
import { CheckboxContainer, CheckboxIndicator, CheckboxRoot } from './styles'

type CheckboxPropTypes = ComponentProps<typeof CheckboxRoot> & {
  title: string
  subtitle: string
  price: string
}

export function Checkbox({
  title,
  price,
  subtitle,
  ...props
}: CheckboxPropTypes) {
  const { setValue, watch } = useFormContext()
  const newValue = props.value.includes(title)
    ? props.value.filter((item: string) => item !== title)
    : [...props.value, title]

  return (
    <CheckboxContainer>
      <CheckboxRoot
        {...props}
        checked={props.value.includes(title)}
        id={title}
        onCheckedChange={() => setValue(props.name, newValue)}
      >
        <CheckboxIndicator>
          <img src={Checkmark} alt="" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <label htmlFor={title}>
        <div>
          <strong>{title}</strong>
          <p>{subtitle}</p>
        </div>
        <span>
          +$
          {watch('recurringType') === 'Yearly'
            ? `${Number(price) * 10}/yr`
            : `${price}/mo`}
        </span>
      </label>
    </CheckboxContainer>
  )
}
