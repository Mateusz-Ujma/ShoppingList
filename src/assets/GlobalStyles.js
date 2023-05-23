import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    width: 100svw;
    height: 100svh;
    background:#999;
  }
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
  #root{
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyle;
