import React from 'react';

import ChatPage from './ChatPage';
import ChatRoomPage from './ChatRoomPage';

const chatsRoutes = [
  {
    path: 'chats',
    children: [
      { index: true, element: <ChatPage /> },
      { path: ':accountname', element: <ChatRoomPage /> },
    ],
  },
];

export default chatsRoutes;
