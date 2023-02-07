import { useFormContext } from 'react-hook-form'
import { Header } from '../Header'
import { plans } from '../SecondStep'
import { addOns } from '../ThirdStep'
import { FourthStepContainer, FourthStepContent } from './styles'

type FourthStepPropsType = {
  goTo(index: number): void
}

export function FourthStep({ goTo }: FourthStepPropsType) {
  const { watch } = useFormContext()

  const selectedAddOnsName = watch('addOns')
  const selectedAddons = addOns.filter((addOn) =>
    selectedAddOnsName.includes(addOn.title),
  )

  const selectedPlanName = watch('plan')
  const selectedPlan = plans.find((plan) => plan.title === selectedPlanName)

  const total =
    selectedAddons
      .map((addOn) => Number(addOn.pricing))
      .reduce((acc, total) => acc + total, 0) + Number(selectedPlan?.pricing)
  return (
    <>
      <Header
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming"
      />
      <FourthStepContainer>
        <FourthStepContent>
          <div>
            <div>
              <span>{selectedPlanName} &#40;Month&#41;</span>
              <button type="button" onClick={() => goTo(2)}>
                Change
              </button>
            </div>
            <span>${selectedPlan?.pricing}/mo</span>
          </div>
          <ul>
            {selectedAddons.map((addOn) => (
              <li key={addOn.title}>
                <span>{addOn.title}</span>
                <span>+${addOn.pricing}/mo</span>
              </li>
            ))}
          </ul>
        </FourthStepContent>
        <div>
          <strong>Total &#40;per month&#41;</strong>
          <strong>+${total}/mo</strong>
        </div>
      </FourthStepContainer>
    </>
  )
}
