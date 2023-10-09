import { styled } from 'styled-components';

export const AlertWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.div`
  width: 25.2rem;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
`;

export const AlertTitle = styled.span`
  display: block;
  padding: 2.2rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  border-bottom: 0.05rem solid ${({ theme }) => theme.color.gray[400]};
`;

export const AlertContent = styled.div`
  display: flex;
  height: 4.6rem;

  button {
    flex: 1 0 0;
    /* padding: 1.2rem 2rem; */
    /* display: block; */
    /* width: 12.6rem; */
    /* height: 4.6rem; */

    &:hover {
      background-color: ${({ theme }) => theme.color.gray[100]};
    }

    &:active {
      background-color: ${({ theme }) => theme.color.gray[300]};
    }

    &:first-child {
      border-right: 0.05rem solid ${({ theme }) => theme.color.gray[400]};
    }
    &:last-child {
      color: ${({ theme }) => theme.color.purpleLight};
    }
  }
`;
