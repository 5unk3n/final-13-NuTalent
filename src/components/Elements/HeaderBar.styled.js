import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

import arrowLeft from '@/assets/img/icon-arrow-left.svg';
import optionImg from '@/assets/img/icon-more-vertical.svg';
import searchImg from '@/assets/img/icon-search.svg';

export const HeaderBar = styled.div`
  width: 100%;
  height: inherit;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme, $size }) => theme.fontSize[$size]};
  font-weight: 700;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 3.2rem;
  margin-left: 1rem;
  padding-left: 1.6rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 3.2rem;

  &::placeholder {
    color: ${(theme) => theme.colors.gray[200]};
  }
`;

const IconButtonStyle = css`
  background-color: inherit;
  border: none;
  width: 2.2rem;
  height: 2.2rem;
`;

export const BackButton = styled.button`
  ${IconButtonStyle}
  background-image: url(${arrowLeft});
`;

export const OptionButton = styled.button`
  ${IconButtonStyle}
  background: url(${optionImg}) no-repeat center / contain;
`;

export const ArrowLeftBtnText = styled.span`
  margin-right: auto;
  padding-left: 1rem;
`;

export const SearchButton = styled(Link)`
  ${IconButtonStyle}
  background-image: url(${searchImg});
`;
