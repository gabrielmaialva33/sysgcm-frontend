import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;

    background-size: cover;
    color:#000;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
   font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
