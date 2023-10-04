import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import User from '@/features/posts/components/User';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import * as S from './UserList.styled';

export default function UserList({ userData }) {
  const [renderCount, setRenderCount] = useState(10);
  const renderedData = userData.slice(0, renderCount);
  const userDataLength = userData.length;

  const renderMoreUser = () => {
    if (renderCount >= userDataLength) return;
    setRenderCount((prevCount) => prevCount + 10);
  };

  const ref = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      renderMoreUser();
    }
  });

  useEffect(() => {
    setRenderCount(10);
  }, [userData]);

  return (
    <S.UserList>
      {renderedData.map((user, index) => {
        const isLastIndex = index === renderedData.length - 1;
        return (
          <li key={user._id} ref={isLastIndex ? ref : null}>
            <Link to={`/profile/${user.accountname}`}>
              <User user={user} />
            </Link>
          </li>
        );
      })}
    </S.UserList>
  );
}
