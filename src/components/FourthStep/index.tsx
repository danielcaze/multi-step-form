import { Header } from '../Header'
import { FourthStepContainer, FourthStepContent } from './styles'

type FourthStepPropsType = {
  goTo(index: number): void
}

export function FourthStep({ goTo }: FourthStepPropsType) {
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
              <span>Arcade &#40;monthly&#41;</span>
              <button type="button" onClick={() => goTo(2)}>
                Change
              </button>
            </div>
            <span>$9/mo</span>
          </div>
          <ul>
            <li>
              <span>Online service</span>
              <span>+$1/mo</span>
            </li>
            <li>
              <span>Larger storage</span>
              <span>+$2/mo</span>
            </li>
          </ul>
        </FourthStepContent>
        <div>
          <strong>Total &#40;per month&#41;</strong>
          <strong>+$12/mo</strong>
        </div>
      </FourthStepContainer>
    </>
  )
}
