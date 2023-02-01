import styled, { css } from 'styled-components'

type FooterContainerPropstype = {
  isLastStep: boolean
}

export const FooterContainer = styled.footer<FooterContainerPropstype>`
  display: flex;
  align-items: center;

  padding: 0.75rem;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  color: ${({ theme }) => theme.color.neutral['cool-gray']};
  font-family: ${({ theme }) => theme.font.family.medium};

  button:first-child:hover {
    filter: brightness(0.5);
    transition: filter 0.5s;
  }

  button:last-child {
    margin-left: auto;
    color: ${({ theme }) => theme.color.neutral.alabaster};
    background-color: ${({ theme }) => theme.color.primary['marine-blue']};
    padding: 0.75rem;
    border-radius: 4px;

    &:hover {
      filter: brightness(2);
      transition: filter 0.5s;
    }

    ${({ theme, isLastStep }) =>
    isLastStep &&
    css`
        background-color: ${theme.color.primary['purplish-blue']};
      `}
  }

  @media (min-width: 768px) {
    button:last-child {
      border-radius: 8px;
      padding: 0.875rem 1.5rem;
    }
  }
`
