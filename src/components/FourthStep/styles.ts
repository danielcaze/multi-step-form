import { darken } from 'polished'
import styled from 'styled-components'

export const FourthStepContainer = styled.div`
  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    strong {
      color: ${({ theme }) => theme.color.neutral['cool-gray']};
      font-weight: 400;

      &:last-child {
        color: ${({ theme }) => theme.color.primary['purplish-blue']};
        font-weight: 600;
      }
    }
  }
`

export const FourthStepContent = styled.div`
  background-color: ${({ theme }) =>
    darken(0.01, theme.color.neutral.alabaster)};
  padding: 1rem;
  border-radius: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
      color: ${({ theme }) => theme.color.primary['marine-blue']};
      font-family: ${({ theme }) => theme.font.family.medium};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        font-family: ${({ theme }) => theme.font.family.medium};
        color: ${({ theme }) => theme.color.neutral['cool-gray']};
        text-decoration: underline;
      }
    }
  }

  div + ul {
    border-top: 1px solid ${({ theme }) => theme.color.neutral['light-gray']};
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;

      span {
        &:first-child {
          color: ${({ theme }) => theme.color.neutral['cool-gray']};
        }

        &:last-child {
          color: ${({ theme }) => theme.color.primary['marine-blue']};
        }
      }
    }
  }
`
