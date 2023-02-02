import { ComponentProps } from 'react'
import { RadioContainer, RadioContent } from './styles'

type RadioGroupPropsType = ComponentProps<typeof RadioContainer> & {
  items: {
    title: string
    icon?: string
    pricing: string
  }[]
  recurringType: 'monthly' | 'yearly'
  changePlan(plan: string): void
  plan: string
}

export function RadioGroup({
  items,
  recurringType,
  plan,
  changePlan,
  ...props
}: RadioGroupPropsType) {
  return (
    <RadioContainer
      type="single"
      value={plan}
      aria-label="Plans"
      onValueChange={(value) => changePlan(value)}
      {...props}
    >
      {items.map((item) => (
        <RadioContent
          key={item.title}
          value={item.title}
          aria-label={item.title}
        >
          {!!item.icon && <img src={item.icon} alt="" />}
          <div>
            <strong>{item.title}</strong>
            <p>
              $
              {recurringType === 'yearly'
                ? `${Number(item.pricing) * 10}/yr`
                : `${item.pricing}/mo`}
            </p>
            {recurringType === 'yearly' && <span>2 months free</span>}
          </div>
        </RadioContent>
      ))}
    </RadioContainer>
  )
}
