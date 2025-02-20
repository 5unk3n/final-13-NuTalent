import React from 'react';
import { useLocation } from 'react-router-dom';

import uploadPostIcon from '@/assets/img/icon-edit.svg';
import activatedHomeIcon from '@/assets/img/icon-home-fill.svg';
import homeIcon from '@/assets/img/icon-home.svg';
import activatedMessageIcon from '@/assets/img/icon-message-circle-fill.svg';
import messageIcon from '@/assets/img/icon-message-circle.svg';
import activatedUserIcon from '@/assets/img/icon-user-fill.svg';
import userIcon from '@/assets/img/icon-user.svg';
import activatedUploadPostIcon from '@/assets/img/more-btn-active.svg';
import useAuth from '@/hooks/useAuth';

import * as S from './BottomNav.styled';

export default function BottomNav() {
  const { user } = useAuth();
  const accountname = user.accountname;

  const navList = [
    {
      path: '/home',
      image: homeIcon,
      activatedImage: activatedHomeIcon,
      name: '홈',
    },
    {
      path: '/chat',
      image: messageIcon,
      activatedImage: activatedMessageIcon,
      name: '채팅',
    },
    {
      path: '/post/upload',
      image: uploadPostIcon,
      activatedImage: activatedUploadPostIcon,
      name: '게시물 작성',
    },
    {
      path: `/profile/${accountname}`,
      image: userIcon,
      activatedImage: activatedUserIcon,
      name: '프로필',
    },
  ];

  const { pathname } = useLocation();

  return (
    <S.TabMenuUl>
      {navList.map((navItem) => {
        const isCurrentPath = pathname === navItem.path;
        return (
          <S.TabMenuLi key={navItem.path}>
            <S.TabMenuLiLink to={navItem.path} $isCurrentPath={isCurrentPath}>
              <img
                src={isCurrentPath ? navItem.activatedImage : navItem.image}
                alt={navItem.name}
              />
              <span>{navItem.name}</span>
            </S.TabMenuLiLink>
          </S.TabMenuLi>
        );
      })}
    </S.TabMenuUl>
  );
}
