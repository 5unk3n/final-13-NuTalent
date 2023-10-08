import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

import messageIcon from '@/assets/img/icon-message-circle.svg';
import shareIcon from '@/assets/img/icon-share.svg';

export const ProfileWrapper = styled.div`
  padding: 3rem 1.6rem;
  text-align: center;
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-bottom: 1.6rem;
`;

export const followLink = styled(Link)`
  display: inline-block;

  & > span:first-child {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  & > span:last-child {
    color: ${({ theme }) => theme.color.gray[500]};
  }
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const UserId = styled.p`
  margin-bottom: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const UserIntro = styled.p`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const DetailInfoWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const circleBtn = css`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.color.gray[400]};
`;

export const messageButton = styled(Link)`
  ${circleBtn}
  background: url(${messageIcon}) no-repeat center;
`;

export const shareButton = styled.button`
  ${circleBtn}
  background: url(${shareIcon}) no-repeat center;
  cursor: pointer;
`;
