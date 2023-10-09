import React from 'react';
import { Link } from 'react-router-dom';

import ChatRoomElement from './ChatRoomElement';

import * as S from './ChatRoomList.styled';

export default function ChatRoomList({ chatRoomList }) {
  return (
    <S.ChatList>
      {chatRoomList.map((chat) => (
        <li key={chat.user.accountname}>
          <Link to={`/chat/${chat.user.accountname}`}>
            <ChatRoomElement chat={chat} />
          </Link>
        </li>
      ))}
    </S.ChatList>
  );
}
