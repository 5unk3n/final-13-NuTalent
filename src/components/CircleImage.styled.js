import styled, { css } from 'styled-components';

const sizes = {
  sm: css`
    width: 3.6rem;
    height: 3.6rem;
  `,
  md: css`
    width: 5rem;
    height: 5rem;
  `,
  lg: css`
    width: 11rem;
    height: 11rem;
  `,
};

export const CircleImage = styled.img`
  ${({ $size }) => sizes[$size]}
  border-radius: 50%;
`;
