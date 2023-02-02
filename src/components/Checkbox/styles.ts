import * as Checkbox from '@radix-ui/react-checkbox'
import { lighten } from 'polished'
import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.neutral['cool-gray']};
  border-radius: 8px;

  display: flex;
  align-items: center;

  transition: background-color 0.2s, border-color 0.2s;

  label {
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;

      p {
        color: ${({ theme }) => theme.color.neutral['cool-gray']};
        font-size: 0.825rem;
      }
    }

    span {
      color: ${({ theme }) => theme.color.primary['purplish-blue']};
      font-family: ${({ theme }) => theme.font.family.medium};
    }
  }

  &:has([data-state='checked']) {
    transition: background-color 0.2s, border-color 0.2s;
    background-color: ${({ theme }) =>
      lighten(0.35, theme.color.primary['purplish-blue'])};
    border-color: ${({ theme }) => theme.color.primary['purplish-blue']};
  }

  & + div {
    margin-top: 1rem;
  }
`

export const CheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.neutral['cool-gray']};

  &[data-state='checked'] {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.color.primary['purplish-blue']};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)``
