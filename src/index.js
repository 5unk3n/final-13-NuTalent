import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { Fragment } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './styles/DefaultTheme';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Fragment>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </Fragment>,
);
