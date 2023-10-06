import React from 'react';

import ChatBubble from './ChatBubble';

import useAuth from '@/hooks/useAuth';

import * as S from './ChatRoomDetail.styled';

export default function ChatRoomDetail({ chatData }) {
  const { user } = useAuth();

  return (
    <S.ChatRoomDetail>
      {chatData.map((chat) => (
        <li key={chat.id}>
          <ChatBubble
            chat={chat}
            isMyChat={chat.user.accountname === user.accountname}
          />
        </li>
      ))}
    </S.ChatRoomDetail>
  );
}
