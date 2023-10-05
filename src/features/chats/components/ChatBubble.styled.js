import styled, { css } from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  ${({ $isMyChat }) => $isMyChat && `flex-direction: row-reverse`}
`;

const Chat = css`
  max-width: 24rem;
  padding: 1.2rem;
  border-radius: 1rem;
`;

const YourChat = css`
  ${Chat}
  background-color: ${({ theme }) => theme.color.white};
  border: 0.1rem solid ${({ theme }) => theme.color.gray[200]};
  border-top-left-radius: 0;
`;

const MyChat = css`
  ${Chat}
  background-color: ${({ theme }) => theme.color.purpleLight};
  color: ${({ theme }) => theme.color.white};
  border-top-right-radius: 0;
`;

export const ChatBubble = styled.div`
  ${({ $isMyChat }) => ($isMyChat ? MyChat : YourChat)}
`;

export const Timestamp = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.gray[500]};
`;
