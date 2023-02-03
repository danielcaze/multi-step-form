import styled from 'styled-components'
import ThanksCheck from '../assets/images/icon-thank-you.svg'

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.primary['marine-blue']};
    font-family: ${({ theme }) => theme.font.family.medium};
  }

  p {
    line-height: 1.3;
    color: ${({ theme }) => theme.color.neutral['cool-gray']};
    max-width: 293px;
  }
`

export function ThankYouStep() {
  return (
    <ThankYouContainer>
      <img src={ThanksCheck} alt="" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </ThankYouContainer>
  )
}
