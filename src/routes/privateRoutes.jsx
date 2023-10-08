import React from 'react';
import { Navigate } from 'react-router-dom';

import BottomLayout from '@/components/Layout/BottomLayout';
import MainLayout from '@/components/Layout/MainLayout';
import ChatPage from '@/features/chats/routes/ChatPage';
import ChatRoomPage from '@/features/chats/routes/ChatRoomPage';
import NotFoundPage from '@/features/misc/routes/NotFoundPage';
import HomePage from '@/features/posts/routes/HomePage';
import PostDetailPage from '@/features/posts/routes/PostDetailPage';
import PostEditPage from '@/features/posts/routes/PostEditPage';
import PostUploadPage from '@/features/posts/routes/PostUploadPage';
import ProductEditPage from '@/features/products/routes/ProductEditPage';
import ProductUploadPage from '@/features/products/routes/ProductUploadPage';
import FollowerPage from '@/features/profiles/routes/FollowerPage';
import FollowingPage from '@/features/profiles/routes/FollowingPage';
import ProfileDetailPage from '@/features/profiles/routes/ProfileDetailPage';
import ProfileEditPage from '@/features/profiles/routes/ProfileEditPage';
import SearchPage from '@/features/searches/routes/SearchPage';

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
