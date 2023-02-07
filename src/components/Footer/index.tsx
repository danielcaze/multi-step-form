import { memo } from 'react'
import { FooterContainer } from './styles'

type FooterPropsType = {
  isLastStep: boolean
  isFirstStep: boolean
  nextStep(): void
  previousStep(): void
}

export const Footer = memo(function FooterComponent({
  isLastStep,
  isFirstStep,
  previousStep,
  nextStep,
}: FooterPropsType) {
  return (
    <FooterContainer isLastStep={isLastStep}>
      {!isFirstStep && (
        <button type="button" onClick={previousStep}>
          Go Back
        </button>
      )}
      <button
        type={isLastStep ? 'submit' : 'button'}
        onClick={(e) => {
          if (!isLastStep) {
            e.preventDefault()
          }
          nextStep()
        }}
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </FooterContainer>
  )
})
