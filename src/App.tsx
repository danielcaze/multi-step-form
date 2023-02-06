import { FormEvent } from 'react'
import { Box } from './components/Box'
import { FirstStep } from './components/FirstStep'
import { Footer } from './components/Footer'
import { FourthStep } from './components/FourthStep'
import { SecondStep } from './components/SecondStep'
import { Steps } from './components/Steps'
import { ThankYouStep } from './components/ThankYouStep'
import { ThirdStep } from './components/ThirdStep'
import { useMultiStep } from './hooks/useMultiStep'
import { FormContainer, FormContent } from './styles'

export function App() {
  const steps = ['Your info', 'Select Plan', 'Add-ons', 'Summary']

  /*eslint-disable */
  const { step, goTo, actualStep, nextStep, previousStep, isLastStep } =
    useMultiStep([
      <FirstStep />,
      <SecondStep />,
      <ThirdStep />,
      <FourthStep />,
      <ThankYouStep />,
    ])
  /* eslint-enable */

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit}>
        <Steps
          currentIndex={actualStep}
          steps={steps}
          changeCurrentStep={goTo}
        />
        <main>
          <Box>{step}</Box>
          {!isLastStep && (
            <Footer
              currentIndex={actualStep}
              steps={steps}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}
        </main>
      </FormContent>
    </FormContainer>
  )
}
