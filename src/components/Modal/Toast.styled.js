import { styled } from 'styled-components';

export const ToastRoot = styled.div`
  position: fixed;
  bottom: 8rem;
  left: calc(50% - 16rem);
  margin: 0 auto;
`;

export const ToastWrapper = styled.div`
  width: 32rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $status }) =>
    $status === 'error' ? theme.color.error : theme.color.purpleLight};
  border-radius: 1rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);

  span {
    color: ${({ theme }) => theme.color.white};
  }
`;
