import React from 'react';
import { useParams } from 'react-router-dom';

import ChatRoomDetail from '../components/ChatRoomDetail';

import HeaderBar from '@/components/Elements/HeaderBar';
import useAuth from '@/hooks/useAuth';

import * as S from './ChatRoomPage.styled';

export default function ChatRoomPage() {
  const { useUser } = useAuth();
  const { data: user } = useUser();

  const { accountname } = useParams();

  const dummyChatData = [
    {
      id: 1,
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687295086842.png',
        username: '그림팝니다',
        accountname: 'sellpicture',
      },
      message: '안녕하세요!',
      timestamp: '2023-10-05T10:00:00',
    },
    {
      id: 2,
      user: {
        image: user.image,
        username: user.username,
        accountname: user.accountname,
      },
      message: '안녕하세요! 반갑습니다.',
      timestamp: '2023-10-05T10:05:00',
    },
    {
      id: 3,
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687295086842.png',
        username: '그림팝니다',
        accountname: 'sellpicture',
      },
      message: '오늘 날씨가 좋네요.',
      timestamp: '2023-10-05T10:10:00',
    },
  ];

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.Title>{accountname}</HeaderBar.Title>
        <HeaderBar.OptionButton type="chatroom" />
      </HeaderBar>
      <S.Section>
        <ChatRoomDetail chatData={dummyChatData} />
      </S.Section>
    </>
  );
}
