import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetFollowerList } from '../api/getFollowerList';
import FollowList from '../components/FollowList';

import HeaderBar from '@/components/Elements/HeaderBar';

export default function FollowerPage() {
  const { accountname } = useParams();

  const { data: followerList, isLoading } = useGetFollowerList(accountname);

  if (isLoading) return;

  return (
    <>
      <HeaderBar>
        <HeaderBar.BackButton />
        <HeaderBar.Title />
      </HeaderBar>
      <FollowList userList={followerList} />
    </>
  );
}
