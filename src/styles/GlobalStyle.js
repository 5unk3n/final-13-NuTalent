import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${reset}

  :root {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'SpoqaHanSansNeo-Regular', 'sans-serif';
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.4;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select,
  option {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
  }

  img {
    vertical-align: bottom;
  }
`;
