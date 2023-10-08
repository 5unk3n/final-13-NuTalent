import React from 'react';

import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import SignupProfilePage from './SignupProfilePage';
import Layout from '../components/Layout';

const authRoutes = [
  {
    element: <Layout />,
    children: [
      { path: 'signin', element: <SigninPage /> },
      {
        path: 'signup',
        children: [
          { index: true, element: <SignupPage /> },
          { path: 'profile', element: <SignupProfilePage /> },
        ],
      },
    ],
  },
];

export default authRoutes;
