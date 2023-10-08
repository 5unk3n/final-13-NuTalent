import { css, styled } from 'styled-components';

import AlbumViewOff from '@/assets/img/icon-post-album-off.svg';
import AlbumViewOn from '@/assets/img/icon-post-album-on.svg';
import listViewOff from '@/assets/img/icon-post-list-off.svg';
import listViewOn from '@/assets/img/icon-post-list-on.svg';

export const ViewControllerWrapper = styled.div`
  padding: 0.9rem 1.6rem;
  border-bottom: 0.05rem solid ${({ theme }) => theme.color.gray[400]};
  display: flex;
  gap: 1.6rem;
`;

export const viewButton = styled.button`
  width: 2.6rem;
  height: 2.6rem;

  &:first-child {
    margin-left: auto;
    background: ${({ $viewType }) =>
        $viewType === 'list' ? `url(${listViewOn})` : `url(${listViewOff})`}
      no-repeat center;
  }

  &:last-child {
    background: ${({ $viewType }) =>
        $viewType === 'album' ? `url(${AlbumViewOn})` : `url(${AlbumViewOff})`}
      no-repeat center;
  }
`;

const listView = css`
  & > li {
    margin-bottom: 2rem;
  }
`;

const albumView = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
`;

export const PostList = styled.ul`
  padding: 1.6rem;
  ${(props) => (props.$viewType === 'list' ? listView : albumView)}
`;

export const AlbumImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;
