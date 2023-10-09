import { styled } from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.gray[100]};
`;

export const Section = styled.section`
  border-width: 0.05rem 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.gray[400]};
  background-color: ${({ theme }) => theme.color.white};

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: none;
  }
`;
