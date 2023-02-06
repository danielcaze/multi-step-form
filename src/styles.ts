import styled from 'styled-components'

export const FormContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.neutral['light-gray']};

  @media (min-width: 768px) {
    padding: 5rem;
  }
`

export const FormContent = styled.form`
  height: 100%;

  main {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    background-color: ${({ theme }) => theme.color.neutral.white};

    display: grid;
    grid-template-columns: max(250px, 30%) 1fr;
    gap: 1rem;

    border-radius: 12px;
    overflow: hidden;
  }
`
