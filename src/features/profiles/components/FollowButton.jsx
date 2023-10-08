import React from 'react';

import { useToggleFollow } from '../api/toggleFollow';

import Button from '@/components/common/Button/Button';

export default function FollowButton({ user, size, ...props }) {
  const { mutate: toggleFollow } = useToggleFollow();

  return (
    <Button
      size={size}
      onClick={() =>
        toggleFollow({
          accountname: user.accountname,
          isFollowed: user.isfollow,
        })
      }
      color={user.isfollow ? 'outline' : 'fill'}
      {...props}
    >
      {user.isfollow ? '언팔로우' : '팔로우'}
    </Button>
  );
}
