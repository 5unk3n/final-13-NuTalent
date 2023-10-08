import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Alert from './components/Modal/Alert';
import BottomSheet from './components/Modal/BottomSheet';
import Toast from './components/Toast/Toast';
import { useAlert, useBottomSheet, useToast } from './hooks/useModal';
import queryClient from './libs/react-query';
import Router from './routes/Router';

function App() {
  const { toast } = useToast();
  const { alert } = useAlert();
  const { bottomSheet } = useBottomSheet();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toast {...toast} />
        <Alert {...alert} />
        <BottomSheet {...bottomSheet} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
