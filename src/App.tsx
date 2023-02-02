import { FormEvent, useState } from 'react'
import { useTheme } from 'styled-components'
import { Box } from './components/Box'
import { FirstStep } from './components/FirstStep'
import { Footer } from './components/Footer'
import { SecondStep } from './components/SecondStep'
import { Steps } from './components/Steps'
import { ThirdStep } from './components/ThirdStep'

export function App() {
  const [currentStep, setStep] = useState(1)
  const { color } = useTheme()

  const steps = ['Your info', 'Select Plan', 'Add-ons', 'Summary']

  function changeCurrentStep(step: number) {
    setStep(step)
  }

  function nextStep() {
    setStep((state) => {
      if (state < steps.length) {
        return state + 1
      }
      return state
    })
  }

  function previousStep() {
    setStep((state) => {
      if (state > 1) {
        return state - 1
      }
      return state
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form
      style={{
        height: '100vh',
        backgroundColor: color.neutral['light-gray'],
      }}
      onSubmit={handleSubmit}
    >
      <Steps
        currentIndex={currentStep}
        steps={steps}
        changeCurrentStep={changeCurrentStep}
      />
      <Box>
        {/* <FirstStep /> */}
        {/* <SecondStep /> */}
        <ThirdStep />
      </Box>
      <Footer
        currentIndex={currentStep}
        steps={steps}
        nextStep={nextStep}
        previousStep={previousStep}
      />
    </form>
  )
}
