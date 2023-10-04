import { styled } from 'styled-components';

export const Product = styled.div`
  width: 14rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 9rem;
  object-fit: contain;
  border: 0.5px solid ${({ theme }) => theme.color.gray[400]};
  border-radius: 0.8rem;
  margin-bottom: 0.6rem;
`;

export const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.4rem;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.color.purpleLight};
`;
