import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopNav from '../../../components/common/Top/TopNav';
import FollowingUser from './FollowingUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Following.styled';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useFollowStatus } from '../../../hooks/react-query/useFollowStatus';

export default function Following() {
  const { accountname } = useParams();
  const { token, accountname: myAccountname } = useRecoilValue(recoilData);
  const { followings, unfollowMutation, followMutation } = useFollowStatus(
    accountname,
    token,
  );

  const followHandler = (userInfo) => {
    try {
      if (userInfo.isfollow) {
        unfollowMutation(userInfo);
      } else {
        followMutation(userInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.Title size="sm">Followings</TopNav.Title>
      </TopNav>
      <UserWrapper>
        {(() => {
          if (!followings) return;

          const myAccount = followings.find(
            (user) => user.accountname === myAccountname,
          );

          const otherFollowings = followings.filter(
            (user) => user !== myAccount,
          );

          const sortedFollowings = myAccount
            ? [myAccount, ...otherFollowings]
            : otherFollowings;

          return sortedFollowings.map((user) => (
            <li key={user._id}>
              <FollowingUser
                userInfo={user}
                followHandler={followHandler}
                size={'small'}
                myAccountName={myAccountname}
              />
            </li>
          ));
        })()}
      </UserWrapper>
      <TabMenu></TabMenu>
    </>
  );
}
