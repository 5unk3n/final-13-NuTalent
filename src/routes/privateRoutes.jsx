import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import chatsRoutes from '@/features/chats/routes';
import postsRoutes from '@/features/posts/routes';
import productsRoutes from '@/features/products/routes';
import profilesRoutes from '@/features/profiles/routes';
import searchesRoutes from '@/features/searches/routes';

export const PrivateRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export const privateRoutes = [
  ...postsRoutes,
  ...productsRoutes,
  ...profilesRoutes,
  ...chatsRoutes,
  ...searchesRoutes,
];
