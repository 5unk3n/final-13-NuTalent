import React, { useEffect } from 'react';

import ChatRoomList from '../components/ChatRoomList';

import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';
import { useToast } from '@/hooks/useModal';

export default function ChatPage() {
  const { openToast } = useToast();

  useEffect(() => {
    openToast({
      message: '현재 채팅 기능은 지원되지 않습니다.',
      status: 'error',
      duration: 5000,
    });
  }, []);

  const dummyChatList = [
    {
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687741772524.JPG',
        username: '방구석뮤지션',
        accountname: 'itismusic',
      },
      lastChat: '디제잉 레슨 받습니다. 회당 2.5 그룹레슨 네고 가능합니다.',
      lastChatTime: '2023.06.27',
      isRead: false,
    },
    {
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687295086842.png',
        username: '그림팝니다',
        accountname: 'sellpicture',
      },
      lastChat: '어떤 그림 말씀이실까요?',
      lastChatTime: '2023.06.22',
      isRead: false,
    },
    {
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687741795495.jpg',
        username: 'nutalent',
        accountname: 'nutalent',
      },
      lastChat: '언제 가능하실까요?',
      lastChatTime: '2023.06.26',
      isRead: true,
    },
    {
      user: {
        image: 'https://api.mandarin.weniv.co.kr/1687741517699.jpg',
        username: '퇴근후아티스트',
        accountname: 'iamartist',
      },
      lastChat: '안녕하세요!',
      lastChatTime: '2023.06.01',
      isRead: true,
    },
  ];

  return (
    <div>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.OptionButton />
      </HeaderBar>
      <section>
        <ChatRoomList chatRoomList={dummyChatList} />
      </section>
    </div>
  );
}
