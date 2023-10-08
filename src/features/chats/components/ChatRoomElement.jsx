import React from 'react';

import CircleImage from '@/components/CircleImage';

import * as S from './ChatRoomElement.styled';

export default function ChatRoomElement({ chat }) {
  return (
    <S.ElementWrapper $isRead={chat.isRead}>
      <CircleImage src={chat.user.image} size={42} />
      <S.TextWrapper>
        <span>{chat.user.username}</span>
        <S.ChatWrapper>
          <S.ChatContent>{chat.lastChat}</S.ChatContent>
          <S.ChatTime>{chat.lastChatTime}</S.ChatTime>
        </S.ChatWrapper>
      </S.TextWrapper>
    </S.ElementWrapper>
  );
}
