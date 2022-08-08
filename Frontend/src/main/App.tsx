import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'

function App() {
  return (
    <>
      <ThemeProvider theme={Themes.defaultTheme}>
        <GlobalStyle />
        <span>Página Principal</span>
      </ThemeProvider>
    </>
  )
}

export default App
