import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}
