import { ComponentProps } from "react";
import { HeaderContainer, Step, StepContainer } from "./styles";

type HeaderPropsType = ComponentProps<typeof StepContainer> & {
  currentIndex: number
  steps: string[]
  changeCurrentStep(currentStep: number): void
}

/* 
  I Think this step counter component could be refactored
*/

export function Header({ currentIndex, steps, changeCurrentStep, ...props }: HeaderPropsType) {
  return (
    <HeaderContainer>
      {
        steps.map((step, index) => {
          const stepNumber = index + 1
          return (
            <StepContainer onClick={() => changeCurrentStep(stepNumber)} {...props}>
              <Step key={step} current={currentIndex >= stepNumber}>{stepNumber}</Step>
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