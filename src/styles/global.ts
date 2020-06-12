import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body {
    min-width: 100%;
    min-height: 100%;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    font: 1.6rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }

/* Type Scale = Perfect Fifth (*1.5) */
  h1 {
    font-size: 54px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 24px;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
