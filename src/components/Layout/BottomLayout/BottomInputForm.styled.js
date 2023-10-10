import { styled } from 'styled-components';

export const BottomInputForm = styled.form`
  height: inherit;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;

  input {
    flex-grow: 1;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray[200]};
    }

    &:focus {
      outline: none;
    }
  }

  button {
    color: ${({ theme }) => theme.color.purpleDark};
    cursor: pointer;

    &:disabled {
      color: ${({ theme }) => theme.color.gray[200]};
    }
  }
`;
