import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import authRoutes from '@/features/auth/routes';

export const PublicRoute = ({user}) => {
  return user ? <Navigate to="/home" /> : <Outlet />;
};

export const publicRoutes = [...authRoutes];

