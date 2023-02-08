import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/theme/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
)
