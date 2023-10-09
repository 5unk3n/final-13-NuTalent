import React from 'react';

import CircleImage from '@/components/Elements/CircleImage/CircleImage';

import * as S from './ChatBubble.styled';

export default function ChatBubble({ chat, isMyChat }) {
  const formattedTime = new Date(chat.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <S.ChatWrapper $isMyChat={isMyChat}>
      {isMyChat || <CircleImage src={chat.user.image} size={42} />}
      <S.ChatBubble $isMyChat={isMyChat}>{chat.message}</S.ChatBubble>
      <S.Timestamp>{formattedTime}</S.Timestamp>
    </S.ChatWrapper>
  );
}
