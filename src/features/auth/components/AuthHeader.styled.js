import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

export const H2 = styled.h2`
  margin-bottom: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const P = styled.p`
  color: ${({ theme }) => theme.color.gray[500]};
`;
