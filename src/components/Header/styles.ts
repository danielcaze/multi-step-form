import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin-block: 1rem;
  h2 {
    font-size: 1.825rem;
  }
  p {
    color: ${({ theme }) => theme.color.neutral['cool-gray']};
    margin-top: 0.75rem;
  }
`
