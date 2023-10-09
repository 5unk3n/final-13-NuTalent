import { styled, css } from 'styled-components';

const UnreadMarker = css`
  &::before {
    content: '';
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.purpleLight};
  }
`;

export const ElementWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  ${({ $isRead }) => $isRead || UnreadMarker}
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ChatWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const ChatContent = styled.span`
  width: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const ChatTime = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  flex-shrink: 0;
`;
