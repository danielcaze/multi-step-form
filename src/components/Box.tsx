import { ReactNode, ComponentProps } from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
  margin-inline: 1rem;
  background-color: ${({ theme }) => theme.color.neutral.alabaster};
  padding: 2rem 1.5rem;
  border-radius: 12px;
  margin-top: -4.5rem;
`

type BoxPropsType = ComponentProps<typeof BoxContainer> & {
  children: ReactNode
}

export function Box({ children, ...props }: BoxPropsType) {
  return <BoxContainer {...props}>{children}</BoxContainer>
}
