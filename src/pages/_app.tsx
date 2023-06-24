import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CoreNotas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />

        <meta 
          name ="description" 
          content="Um projeto que lista tarefas descritas pelo usuario, com React, NextJs e TypeScript"
          />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App