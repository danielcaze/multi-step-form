import styled, { css } from 'styled-components'

type InputContainerProps = {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
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

  ${({ hasError, theme }) =>
    hasError &&
    css`
      div span {
        display: inline;
      }

      input,
      input:hover,
      input:focus {
        border-color: ${theme.color.primary['strawberry-red']};
      }
    `}

  @media (min-width: 768px) {
    & + div {
      margin-top: 2rem;
    }
  }
`

export const InputContent = styled.input`
  width: 100%;
  padding: 0.825rem;
  border: 1px solid ${({ theme }) => theme.color.neutral['light-gray']};
  border-radius: 4px;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.neutral.magnolia};
  font-family: ${({ theme }) => theme.font.family.medium};

  outline: 0;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.color.primary['marine-blue']};
    transition: border-color 0.5s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral['cool-gray']};
  }

  @media (min-width: 768px) {
    height: 3.5rem;
    border-radius: 12px;
    margin-top: 0.5rem;
  }
`
