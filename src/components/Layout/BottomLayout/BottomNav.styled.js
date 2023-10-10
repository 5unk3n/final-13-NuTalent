import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TabMenuUl = styled.ul`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const TabMenuLi = styled.li`
  flex: 1 1 0;
  text-align: center;
`;

export const TabMenuLiLink = styled(Link)`
  display: block;

  & > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.4rem;
  }

  & > span {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ $isCurrentPath, theme }) =>
      $isCurrentPath ? theme.color.purpleLight : theme.color.gray[500]};
  }
`;
