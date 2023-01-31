import { FormEvent, useState } from "react"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"

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
      <Header currentIndex={currentStep} steps={steps} changeCurrentStep={changeCurrentStep} />
      {/* <main>
        <header>
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </header>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="e.g. Daniel Cazé" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="e.g. danielcaze@lorem.com" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="e.g. +55 83 988979997" />
        </fieldset>
      </main>
       */}
      <Footer currentIndex={currentStep} steps={steps} nextStep={nextStep} previousStep={previousStep} />
    </form>
  )
}
