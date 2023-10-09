import React from 'react';

import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import Layout from '../components/Layout';

const authRoutes = [
  {
    element: <Layout />,
    children: [
      { path: 'signin', element: <SigninPage /> },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
];

export default authRoutes;
