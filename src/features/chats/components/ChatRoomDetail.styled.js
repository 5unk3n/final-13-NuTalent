import styled from 'styled-components';

export const ChatRoomDetail = styled.ul`
  height: 100%;
  padding: 2rem 1.6rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.gray[100]};

  & > li {
    margin-top: 1rem;
  }
`;
