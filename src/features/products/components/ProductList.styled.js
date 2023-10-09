import styled from 'styled-components';

export const ProductListWrapper = styled.div`
  padding: 2rem 1.6rem;
`;

export const ProductHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
`;
