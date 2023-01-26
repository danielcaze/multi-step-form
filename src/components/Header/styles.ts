import styled, { css } from "styled-components";
import MobileBackground from '../../assets/images/bg-sidebar-mobile.svg'
import DesktopBackground from '../../assets/images/bg-sidebar-desktop.svg'

export const HeaderContainer = styled.header`
  height: 12rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 0.375rem;

  padding-top: 2rem;
  padding-inline: 5vw;
  border-radius: 12px;
  
  background-size: cover;
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    padding: 2rem;
    height: 100%;
    background-image: url(${DesktopBackground});

    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
  }
`

type StepPropsType = {
  current: boolean
}

export const StepContainer = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: none;
    text-transform: uppercase;
    text-align: left;

    span {
      color: ${({ theme }) => theme.color.neutral["cool-gray"]};
      font-family: ${({ theme }) => theme.font.family.regular};
      font-size: 0.875rem;
    }
    
    p {
      color: ${({ theme }) => theme.color.neutral.white};
      font-family: ${({ theme }) => theme.font.family.medium};
      margin-top: 0.25rem;
    }
  }

  @media (min-width: 768px) {
    div {
      display: block;
    }
  }
`


export const Step = styled.span<StepPropsType>`
  font-family: ${({ theme }) => theme.font.family.medium};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem 1rem;
  line-height: 0;
  border-radius: 99999px;

  border: 1px solid ${({ theme }) => theme.color.neutral.alabaster};
  background-color: transparent;
  color: ${({ theme }) => theme.color.neutral.white};

  ${({ current, theme }) => current && css`
    border: 1px solid  ${theme.color.neutral.alabaster};
    background-color: ${theme.color.primary["light-blue"]};
    color: ${({ theme }) => theme.color.neutral.magnolia};
  `}
`