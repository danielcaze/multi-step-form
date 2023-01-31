import { FormEvent, useState } from "react"
import { Footer } from "./components/Footer";
import { Steps } from "./components/Steps"

export function App() {
  const [currentStep, setStep] = useState(1);

  const steps = ['Your info', 'Select Plan', 'Add-ons', 'Summary']

  function changeCurrentStep(step: number) {
    setStep(step)
  }

  function nextStep() {
    setStep(state => {
      if (state < steps.length) {
        return state + 1
      }
      return state
    })
  }

  function previousStep() {
    setStep(state => {
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
    <form style={{ height: '700px', width: '300px' }} onSubmit={handleSubmit}>
      <Steps currentIndex={currentStep} steps={steps} changeCurrentStep={changeCurrentStep} />
      {/* <main>
        
      </main>
       */}
      <Footer currentIndex={currentStep} steps={steps} nextStep={nextStep} previousStep={previousStep} />
    </form>
  )
}
