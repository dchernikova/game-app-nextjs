import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body,
  [class^="Mui"] {
    && {
      font-family: 'Open Sans', sans-serif;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles
