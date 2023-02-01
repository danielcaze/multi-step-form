import { HeaderContainer } from './styles'

type HeaderPropsType = {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderPropsType) {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      {!!subtitle && <p>{subtitle}</p>}
    </HeaderContainer>
  )
}
