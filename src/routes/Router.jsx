import React from 'react';
import { useRoutes } from 'react-router-dom';

import { PrivateRoute, privateRoutes } from './privateRoutes';
import { PublicRoute, publicRoutes } from './publicRoutes';

import { SplashPage, IntroPage, NotFoundPage } from '@/features/misc/routes';
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
