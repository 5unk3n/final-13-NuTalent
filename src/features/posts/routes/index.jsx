import React from 'react';

import HomePage from './HomePage';
import PostDetailPage from './PostDetailPage';
import PostEditPage from './PostEditPage';
import PostUploadPage from './PostUploadPage';

const postsRoutes = [
  { path: 'home', element: <HomePage /> },
  {
    path: 'post',
    children: [
      { path: ':id', element: <PostDetailPage /> },
      { path: 'upload', element: <PostUploadPage /> },
      { path: 'edit/:id', element: <PostEditPage /> },
    ],
  },
];

export default postsRoutes;
