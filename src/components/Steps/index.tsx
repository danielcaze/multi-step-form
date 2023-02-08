import { Step, StepsContainer, StepsContent } from './styles'

type StepsPropsType = {
  currentIndex: number
  steps: string[]
  isThankYouStep: boolean
  changeCurrentStep(currentStep: number): void
}

export function Steps({
  currentIndex,
  steps,
  isThankYouStep,
  changeCurrentStep,
}: StepsPropsType) {
  return (
    <StepsContainer>
      {steps.map((step, index) => {
        const stepNumber = index + 1
        return (
          <StepsContent
            key={step}
            onClick={() => {
              if (!isThankYouStep) changeCurrentStep(stepNumber)
            }}
          >
            <Step
              current={
                currentIndex === stepNumber ||
                (stepNumber === steps.length && currentIndex >= steps.length)
              }
            >
              {stepNumber}
            </Step>
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
