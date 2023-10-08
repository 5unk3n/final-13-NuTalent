import React from 'react';

import FollowerPage from './FollowerPage';
import FollowingPage from './FollowingPage';
import ProfileDetailPage from './ProfileDetailPage';
import ProfileEditPage from './ProfileEditPage';

const profilesRoutes = [
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
      { path: 'edit', element: <ProfileEditPage /> },
    ],
  },
];

export default profilesRoutes;
