import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styled from 'styled-components'
import { lighten } from 'polished'

export const RadioContent = styled(ToggleGroup.Item)`
  display: flex;
  align-items: flex;
  gap: 1rem;

  padding: 1rem;

  border: 1px solid ${(props) => props.theme.color.neutral['light-gray']};
  border-radius: 6px;
  width: 100%;

  transition: all 0.5s;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;

    strong,
    p,
    span {
      font-family: ${({ theme }) => theme.font.family.medium};
    }

    strong {
      color: ${({ theme }) => theme.color.primary['marine-blue']};
      font-size: 1.125rem;
    }

    p {
      color: ${({ theme }) => theme.color.neutral['cool-gray']};
    }

    span {
      color: ${({ theme }) => theme.color.primary['marine-blue']};
      font-size: 0.825rem;
    }
  }

  &[data-state='on'] {
    background: ${({ theme }) =>
      lighten(0.12, theme.color.primary['pastel-blue'])};
    border-color: ${({ theme }) => theme.color.primary['marine-blue']};
    transition: all 0.5s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.primary['marine-blue']};
    transition: border-color 0.5s;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;

    height: 10rem;
  }
`

export const RadioContainer = styled(ToggleGroup.Root)`
  ${RadioContent} + ${RadioContent} {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    ${RadioContent} + ${RadioContent} {
      margin-top: 0;
    }
  }
`
