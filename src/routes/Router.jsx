import React from 'react';
import { useRoutes } from 'react-router-dom';

import { PrivateRoute, privateRoutes } from './privateRoutes';
import { PublicRoute, publicRoutes } from './publicRoutes';

import IntroPage from '@/features/misc/routes/IntroPage';
import NotFoundPage from '@/features/misc/routes/NotFoundPage';
import SplashPage from '@/features/misc/routes/SplashPage';
import useAuth from '@/hooks/useAuth';

export default function Router() {
  const { user } = useAuth();

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
    { element: <PublicRoute user={user} />, children: publicRoutes },
    { element: <PrivateRoute user={user} />, children: privateRoutes },
  ]);

  return element;
}
