import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background.white};
    color: ${(props) => props.theme.colors.primary.contrastText};
  }

  h1 {
    display: flex;
    justify-content: center;
  }
`;
