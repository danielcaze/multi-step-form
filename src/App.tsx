import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const MultiStepFormSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  phone: zod
    .string()
    .regex(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/),
  plan: zod.enum(['Arcade', 'Advanced', 'Pro']),
  recurringType: zod.enum(['Monthly', 'Yearly']),
  addOns: zod
    .enum(['Online service', 'Larger storage', 'Customizable profile'])
    .array(),
})

type MultiStepForm = zod.infer<typeof MultiStepFormSchema>

export function App() {
  const steps = ['Your info', 'Select Plan', 'Add-ons', 'Summary']

  const methods = useForm<MultiStepForm>({
    resolver: zodResolver(MultiStepFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: 'Arcade',
      recurringType: 'Monthly',
      addOns: [],
    },
  })
  const { handleSubmit, watch } = methods

  /*eslint-disable */
  const multiStep =
    useMultiStep([
      FirstStep,
      SecondStep,
      ThirdStep,
      FourthStep,
      ThankYouStep,
    ])
  /* eslint-enable */

  const {
    step: Step,
    actualStep,
    isLastStep,
    isFirstStep,
    goTo,
    nextStep,
    previousStep,
  } = multiStep

  function onSubmit(data: MultiStepForm) {
    console.log(data)
  }
  console.log(watch())
  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <Steps
          currentIndex={actualStep}
          steps={steps}
          changeCurrentStep={goTo}
        />
        <main>
          <FormProvider {...methods}>
            <Box>{<Step {...multiStep} />}</Box>
          </FormProvider>
          {!isLastStep && (
            <Footer
              isLastStep={isLastStep}
              isFirstStep={isFirstStep}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}
        </main>
      </FormContent>
    </FormContainer>
  )
}
