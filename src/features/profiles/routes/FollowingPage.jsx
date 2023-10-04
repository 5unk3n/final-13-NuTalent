import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetFollowingList } from '../api/getFollowingList';
import FollowList from '../components/FollowList';

import HeaderBar from '@/components/Elements/HeaderBar';

export default function FollowingPage() {
  const { accountname } = useParams();

  const { data: followingList, isLoading } = useGetFollowingList(accountname);

  if (isLoading) return;

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.Title size="sm">Following</HeaderBar.Title>
      </HeaderBar>
      <FollowList userList={followingList} />
    </>
  );
}
