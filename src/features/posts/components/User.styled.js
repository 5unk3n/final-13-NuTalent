import { styled } from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const UserDetails = styled.div`
  flex-grow: 1;
`;

export const Username = styled.p`
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const Accountname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.gray[500]};
`;
