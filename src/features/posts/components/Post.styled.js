import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import ActiveHeartImg from '@/assets/img/Active-icon-heart.svg';
import heartImg from '@/assets/img/icon-heart.svg';
import messageImg from '@/assets/img/icon-message-circle.svg';
import moreImg from '@/assets/img/s-icon-more-vertical.svg';

export const PostWrapper = styled.article`
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-left: 5.4rem;
  padding-top: 1.2rem;
`;

export const PostText = styled.p`
  margin-bottom: 1.6rem;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const IconButton = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const HeartButton = styled.button`
  ${IconButton}
  background: ${({ $isHearted }) =>
    $isHearted
      ? `url(${ActiveHeartImg})`
      : `url(${heartImg})`} no-repeat center / cover;
`;

export const CommentButton = styled(Link)`
  ${IconButton}
  margin-left: 1rem;
  background: url(${messageImg}) no-repeat center / cover;
`;

export const PostSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-left: 0.6rem;
`;

export const PostDate = styled.p`
  margin-bottom: 0.4rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const OptionButton = styled.button`
  position: absolute;
  right: 0;
  top: 0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  background: url(${moreImg}) no-repeat center / cover;
`;
