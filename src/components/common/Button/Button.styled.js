import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sizes = {
  l: css`
    width: 100%;
    height: 4.4rem;
    border-radius: 4.4rem;
  `,
  m: css`
    width: 12rem;
    height: 3.4rem;
    border-radius: 3rem;
  `,
  ms: css`
    width: 9rem;
    height: 3.2rem;
    border-radius: 3.2rem;
  `,
  s: css`
    width: 5.6rem;
    height: 2.8rem;
    border-radius: 2.6rem;
    font-size: 1.2rem;
  `,
};

const colors = {
  fill: css`
    background-color: ${({ theme }) => theme.color.purpleLight};
    color: ${({ theme }) => theme.color.white};
  `,
  outline: css`
    background: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.purpleLight};
    color: ${({ theme }) => theme.color.purpleLight};
  `,
  outlineGray: css`
    background: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.color.gray[400]} 0.1rem solid;
    color: ${({ theme }) => theme.color.gray[500]};
  `,
};

const StyledBtn = css`
  cursor: pointer;

  ${({ $size }) => sizes[$size]}
  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $color }) => colors[$color]}

  &:disabled {
    background-color: #c2a9ce;
  }
`;

export const StyledButton = styled.button`
  ${StyledBtn}
`;

export const StyledLink = styled(Link)`
  ${StyledBtn}
  display: flex;
  justify-content: center;
  align-items: center;
`;
