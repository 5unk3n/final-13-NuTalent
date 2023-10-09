import { styled } from 'styled-components';

export const BottomRoot = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
  border-top: ${({ theme }) => theme.color.gray[400]} 0.05rem solid;
  background-color: ${({ theme }) => theme.color.white};
`;

export const ContentWrapper = styled.div`
  padding-bottom: 6rem;
`;
