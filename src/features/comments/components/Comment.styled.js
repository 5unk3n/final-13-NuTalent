import { Link } from 'react-router-dom';
import styled from 'styled-components';

import moreImg from '@/assets/img/icon-more-vertical.svg';

export const CommentWrapper = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
`;

export const UserWrapper = styled.div`
  margin-bottom: 0.4rem;
  display: flex;
  gap: 1.2rem;
  align-items: start;
`;

export const TextWrapper = styled.div`
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
`;

export const Username = styled(Link)`
  margin-right: 0.6rem;
`;

export const TimeAgo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Content = styled.p`
  // FIXME:완성 후 팔레트에 색상 추가
  color: #333333;
  padding-left: 4.8rem;
`;

export const OptionButton = styled.button`
  position: absolute;
  right: 0;
  top: 0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  background: url(${moreImg}) no-repeat center / cover;
`;
