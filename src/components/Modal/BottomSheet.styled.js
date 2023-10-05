import { styled } from 'styled-components';

export const BottomSheetWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ theme }) => theme.color.white};

  &::before {
    content: '';
    display: block;
    width: 7rem;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.color.gray[400]};
    border-radius: 5rem;
    margin: 2rem auto;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 4.6rem;
  padding: 1.4rem 2.6rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: start;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.gray[300]};
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;
