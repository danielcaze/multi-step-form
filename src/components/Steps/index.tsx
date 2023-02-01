import { Step, StepsContainer, StepsContent } from './styles'

type StepsPropsType = {
  currentIndex: number
  steps: string[]
  changeCurrentStep(currentStep: number): void
}

/* 
  I Think this step counter component could be refactored
*/

export function Steps({
  currentIndex,
  steps,
  changeCurrentStep,
}: StepsPropsType) {
  return (
    <StepsContainer>
      {steps.map((step, index) => {
        const stepNumber = index + 1
        return (
          <StepsContent
            key={step}
            onClick={() => changeCurrentStep(stepNumber)}
          >
            <Step current={currentIndex === stepNumber}>{stepNumber}</Step>
            <div>
              <span>Step {stepNumber}</span>
              <p>{step}</p>
            </div>
          </StepsContent>
        )
      })}
    </StepsContainer>
  )
}
