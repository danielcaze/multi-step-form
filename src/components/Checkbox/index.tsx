import { ComponentProps } from 'react'
import Checkmark from '../../assets/images/icon-checkmark.svg'
import { CheckboxContainer, CheckboxIndicator, CheckboxRoot } from './styles'

type CheckboxPropTypes = ComponentProps<typeof CheckboxRoot> & {
  title: string
  subtitle: string
  price: string
  recurringType: 'monthly' | 'yearly'
  toggleItem(item: string): void
}

export function Checkbox({
  title,
  price,
  subtitle,
  recurringType,
  toggleItem,
  ...props
}: CheckboxPropTypes) {
  function handleCheckChange() {
    toggleItem(title)
  }
  return (
    <CheckboxContainer>
      <CheckboxRoot id={title} onCheckedChange={handleCheckChange} {...props}>
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
          {recurringType === 'yearly'
            ? `${Number(price) * 10}/yr`
            : `${price}/mo`}
        </span>
      </label>
    </CheckboxContainer>
  )
}
