import styled, { css } from 'styled-components'

type InputContainerProps = {
  hasError: boolean
}

export const InputContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: none;
      color: ${({ theme }) => theme.color.primary['strawberry-red']};
    }
  }

  & + div {
    margin-top: 1rem;
  }
`

export const InputContent = styled.input<InputContainerProps>`
  width: 100%;
  padding: 0.825rem;
  border: 1px solid ${({ theme }) => theme.color.neutral['light-gray']};
  border-radius: 4px;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.neutral.magnolia};
  font-family: ${({ theme }) => theme.font.family.medium};

  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary['marine-blue']};
    transition: border-color 0.5s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral['cool-gray']};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.color.primary['strawberry-red']};
    `}
`
