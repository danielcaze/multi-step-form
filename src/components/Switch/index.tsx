import { SwitchContainer, SwitchRoot, SwitchThumb } from './styles'

type SwitchPropsType = {
  leftItem: string
  rightItem: string
  toggleSwitch(bool: boolean): void
  switchValue: boolean
}

export function Switch({
  leftItem,
  rightItem,
  toggleSwitch,
  switchValue,
}: SwitchPropsType) {
  return (
    <SwitchContainer>
      <button onClick={() => toggleSwitch(false)}>{leftItem}</button>
      <SwitchRoot
        checked={switchValue}
        onCheckedChange={(value) => toggleSwitch(value)}
      >
        <SwitchThumb />
      </SwitchRoot>
      <button onClick={() => toggleSwitch(true)}>{rightItem}</button>
    </SwitchContainer>
  )
}
