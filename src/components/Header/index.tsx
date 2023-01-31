import { ComponentProps } from "react";
import { HeaderContainer, Step, StepContainer } from "./styles";

type HeaderPropsType = {
  currentIndex: number
  steps: string[]
  changeCurrentStep(currentStep: number): void
}

/* 
  I Think this step counter component could be refactored
*/

export function Header({ currentIndex, steps, changeCurrentStep }: HeaderPropsType) {
  return (
    <HeaderContainer>
      {
        steps.map((step, index) => {
          const stepNumber = index + 1
          return (
            <StepContainer key={step} onClick={() => changeCurrentStep(stepNumber)}>
              <Step current={currentIndex === stepNumber}>{stepNumber}</Step>
              <div>
                <span>Step {stepNumber}</span>
                <p>{step}</p>
              </div>
            </StepContainer>
          )
        })
      }
    </HeaderContainer>
  )
}