import React from 'react';
import { useParams } from 'react-router-dom';

import FollowButton from './FollowButton';
import ProfileSkeleton from './ProfileSkeleton';
import { useGetProfile } from '../api/getProfile';

import CircleImage from '@/components/CircleImage';
import Button from '@/components/common/Button/Button';
import useAuth from '@/hooks/useAuth';
import shareURL from '@/util/shareURL';

import * as S from './Profile.styled';

export default function Profile() {
  const { accountname } = useParams();
  const { user } = useAuth();
  const myAccountname = user.accountname;
  const { data: profile, isLoading } = useGetProfile(accountname);

  if (isLoading) return <ProfileSkeleton />;

  const isMyProfile = profile.accountname === myAccountname;

  return (
    <S.ProfileWrapper>
      <S.BasicInfoWrapper>
        <S.followLink to="follower">
          <span>{profile.followerCount}</span>
          <span>followers</span>
        </S.followLink>
        <CircleImage src={profile.image} size="110" alt="프로필 사진" />
        <S.followLink to="following">
          <span>{profile.followingCount}</span>
          <span>followings</span>
        </S.followLink>
      </S.BasicInfoWrapper>
      <S.DetailInfoWrapper>
        <S.UserName>{profile.username}</S.UserName>
        <S.UserId>@ {profile.accountname}</S.UserId>
        <S.UserIntro>{profile.intro}</S.UserIntro>
      </S.DetailInfoWrapper>
      <S.ButtonWrapper>
        {isMyProfile ? (
          <>
            <Button to="/profile/edit" size="m" color="outline">
              프로필 수정
            </Button>
            <Button to="/product/upload" size="m" color="outline">
              상품 등록
            </Button>
          </>
        ) : (
          <>
            <S.messageButton
              to={`/chat/${profile.accountname}`}
              state={{
                username: profile.username,
                image: profile.image,
              }}
            />
            <FollowButton user={profile} size="m" />
            <S.shareButton onClick={() => shareURL(window.location.href)} />
          </>
        )}
      </S.ButtonWrapper>
    </S.ProfileWrapper>
  );
}
