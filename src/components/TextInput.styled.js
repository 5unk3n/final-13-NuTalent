import { styled } from 'styled-components';

export const InputWrapper = styled.div``;

export const InputLabel = styled.label`
  display: block;
  padding-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const InputField = styled.input`
  width: 100%;
  border-bottom: ${({ $isError, theme }) =>
      $isError ? theme.color.error : theme.color.gray[400]}
    0.1rem solid;
  margin-bottom: 0.6rem;

  &:focus {
    border-bottom: ${({ theme }) => theme.color.purpleLight} 0.1rem solid;
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.gray[400]};
  }
`;

export const BottomText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.error};
`;
