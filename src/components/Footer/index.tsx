import { FooterContainer } from "./styles";

type FooterPropsType = {
  currentIndex: number
  steps: string[]
  nextStep(): void
  previousStep(): void
}

export function Footer({ currentIndex, steps, previousStep, nextStep }: FooterPropsType) {
  const isFirstStep = currentIndex === 1
  const isLastStep = steps.length === currentIndex

  return (
    <FooterContainer isLastStep={isLastStep}>
      {!isFirstStep && <button type="button" onClick={previousStep}>Go Back</button>}
      <button
        type={isLastStep ? "submit" : "button"}
        onClick={(e) => {
          if (!isLastStep) {
            e.preventDefault()
          }
          nextStep()
        }}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </FooterContainer>
  )
}