import React from 'react';
import { useRoutes } from 'react-router-dom';

import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

import IntroPage from '@/features/misc/routes/IntroPage';
import NotFoundPage from '@/features/misc/routes/NotFoundPage';
import SplashPage from '@/features/misc/routes/SplashPage';

export default function Router() {
  const commonRoutes = [
    {
      path: '/',
      element: <SplashPage />,
    },
    {
      path: '/intro',
      element: <IntroPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  const element = useRoutes([
    ...commonRoutes,
    ...publicRoutes,
    ...privateRoutes,
  ]);

  return element;
}
