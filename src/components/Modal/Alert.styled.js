import { styled } from 'styled-components';

export const AlertWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
`;

export const AlertTitle = styled.span`
  display: block;
  padding: 2rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  border-bottom: 0.05rem solid ${({ theme }) => theme.color.gray[400]};
`;

export const AlertContent = styled.div`
  button {
    padding: 1.5rem 4.5rem;

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
