import React from 'react';
import { Navigate } from 'react-router-dom';

import BottomLayout from '@/components/Layout/BottomLayout/BottomLayout';
import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import { ChatPage, ChatRoomPage } from '@/features/chats/routes';
import { NotFoundPage } from '@/features/misc/routes';
import {
  HomePage,
  PostDetailPage,
  PostUploadPage,
  PostEditPage,
} from '@/features/posts/routes';
import { ProductUploadPage, ProductEditPage } from '@/features/products/routes';
import {
  ProfileDetailPage,
  ProfileEditPage,
  FollowerPage,
  FollowingPage,
} from '@/features/profiles/routes';
import { SearchPage } from '@/features/searches/routes';

export const PrivateRoute = ({ user }) => {
  return user ? <MainLayout /> : <Navigate to="/signin" replace />;
};

export const privateRoutes = [
  { path: 'profile/edit', element: <ProfileEditPage /> },
  {
    path: 'post',
    children: [
      { index: true, element: <NotFoundPage /> },
      { path: 'upload', element: <PostUploadPage /> },
      { path: 'edit/:id', element: <PostEditPage /> },
    ],
  },
  {
    path: 'product',
    children: [
      { index: true, element: <NotFoundPage /> },
      { path: 'upload', element: <ProductUploadPage /> },
      { path: 'edit/:id', element: <ProductEditPage /> },
    ],
  },
  {
    element: <BottomLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      {
        path: 'chat',
        children: [
          { index: true, element: <ChatPage /> },
          { path: ':accountname', element: <ChatRoomPage /> },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: ':accountname',
            children: [
              { index: true, element: <ProfileDetailPage /> },
              { path: 'follower', element: <FollowerPage /> },
              { path: 'following', element: <FollowingPage /> },
            ],
          },
        ],
      },
      { path: 'post/:id', element: <PostDetailPage /> },
    ],
  },
];
