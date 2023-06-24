import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box
  }

  html {
      font-size: 62.5%
  }

  body {
      font-family: 'Roboto', sans-serif;
      background-color: #F0F2F5;
      color: #4F4F4D;
  }
`

export default GlobalStyles