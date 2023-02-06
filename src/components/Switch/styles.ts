import * as Switch from '@radix-ui/react-switch'
import { lighten } from 'polished'
import styled from 'styled-components'

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.825rem;

  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;

  background: ${({ theme }) =>
    lighten(0.13, theme.color.primary['pastel-blue'])};

  > button {
    transition: color 0.5s;
    font-family: ${({ theme }) => theme.font.family.medium};
  }

  &:has([data-state='unchecked']) > button:first-child,
  &:has([data-state='checked']) > button:last-child {
    color: ${({ theme }) => theme.color.primary['marine-blue']};
  }

  &:has([data-state='checked']) > button:first-child,
  &:has([data-state='unchecked']) > button:last-child {
    color: ${({ theme }) => theme.color.neutral['cool-gray']};
  }
`

export const SwitchRoot = styled(Switch.Root)`
  width: 2.5rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.color.primary['marine-blue']};
  border-radius: 12px;
  position: relative;
`
export const SwitchThumb = styled(Switch.SwitchThumb)`
  display: block;
  height: 1rem;
  width: 1rem;

  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 100%;

  transform: translateX(0.175rem);
  transition: transform 0.5s;

  &[data-state='checked'] {
    transform: translateX(1.325rem);
  }
`
