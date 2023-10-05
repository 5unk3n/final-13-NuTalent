import React from 'react';

import ChatBubble from './ChatBubble';

import useAuth from '@/hooks/useAuth';

import * as S from './ChatRoomDetail.styled';

export default function ChatRoomDetail({ chatData }) {
  const { useUser } = useAuth();
  const { data: user } = useUser();

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
