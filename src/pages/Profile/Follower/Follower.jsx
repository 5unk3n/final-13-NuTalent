import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopNav from '../../../components/common/Top/TopNav';
import FollowerUser from './FollowerUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Follower.styled';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useFollowStatus } from '../../../hooks/react-query/useFollowStatus';

export default function Follower() {
  const { accountname } = useParams();
  const { token, accountname: myAccountname } = useRecoilValue(recoilData);
  const { followers, unfollowMutation, followMutation } = useFollowStatus(
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
      console.log(error);
    }
  };

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.Title size="sm">Followers</TopNav.Title>
      </TopNav>
      <UserWrapper>
        {(() => {
          if (!followers) return;

          const myAccount = followers.find(
            (user) => user.accountname === myAccountname,
          );

          const otherFollowers = followers.filter((user) => user !== myAccount);

          const sortedFollowers = myAccount
            ? [myAccount, ...otherFollowers]
            : otherFollowers;

          return sortedFollowers.map((user) => (
            <li key={user._id}>
              <FollowerUser
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
