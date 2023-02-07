import { useState } from 'react'

type useMultiStepProps = Array<(props: any) => JSX.Element>

export function useMultiStep(steps: useMultiStepProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const isLastStep = steps.length - 1 === currentStep
  const isFirstStep = currentStep === 0
  const actualStep = currentStep + 1

  const step = steps[currentStep]

  function nextStep() {
    setCurrentStep((state) => {
      if (state < steps.length - 1) {
        return state + 1
      }
      return state
    })
  }

  function previousStep() {
    setCurrentStep((state) => {
      if (state >= 0) {
        return state - 1
      }
      return state
    })
  }

  function goTo(step: number) {
    if (step < steps.length || step >= 0) {
      setCurrentStep(step - 1)
    }
  }

  return {
    step,
    actualStep,
    isLastStep,
    isFirstStep,
    nextStep,
    previousStep,
    goTo,
  }
}
