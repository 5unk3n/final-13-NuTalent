import React from 'react';
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from './styles/DefaultTheme';
import { GlobalStyle } from './styles/GlobalStyle';

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
