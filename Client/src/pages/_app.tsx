import type { AppProps } from 'next/app'
import AppLayout from '../common/RootLayout'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    /* box-sizing: border-box; */
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
