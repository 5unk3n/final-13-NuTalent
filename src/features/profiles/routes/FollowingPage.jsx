import React from 'react';
import { useParams } from 'react-router-dom';

import FollowList from '../components/FollowList';

import HeaderBar from '@/components/Layout/MainLayout/HeaderBar';

export default function FollowingPage() {
  const { accountname } = useParams();

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.Title size="sm">Following</HeaderBar.Title>
      </HeaderBar>
      <FollowList accountname={accountname} mode="following" />
    </>
  );
}
