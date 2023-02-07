import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioContainer, RadioContent } from './styles'

type RadioGroupPropsType = ComponentProps<typeof RadioContainer> & {
  items: {
    title: string
    icon?: string
    pricing: string
  }[]
  recurringType: 'monthly' | 'yearly'
}

export function RadioGroup({
  items,
  recurringType,
  ...props
}: RadioGroupPropsType) {
  const { setValue } = useFormContext()

  return (
    <RadioContainer
      type="single"
      aria-label="Plans"
      onValueChange={(value: string) => setValue(props.name, value)}
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
