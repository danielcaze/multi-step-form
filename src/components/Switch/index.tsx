import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { SwitchContainer, SwitchRoot, SwitchThumb } from './styles'

type SwitchPropsType = ComponentProps<typeof SwitchContainer> & {
  leftItem: string
  rightItem: string
}

export function Switch({ leftItem, rightItem, ...props }: SwitchPropsType) {
  const { setValue, watch } = useFormContext()

  return (
    <SwitchContainer>
      <button onClick={() => setValue(props.name, leftItem)}>{leftItem}</button>
      <SwitchRoot
        checked={watch('recurringType') === rightItem}
        onCheckedChange={(value) =>
          setValue(props.name, value ? rightItem : leftItem)
        }
      >
        <SwitchThumb />
      </SwitchRoot>
      <button onClick={() => setValue(props.name, rightItem)}>
        {rightItem}
      </button>
    </SwitchContainer>
  )
}
