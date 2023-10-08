import { styled, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: -100% 0%;
  }
`;

export const Skeleton = styled.div`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  margin: ${({ $mt, $mr, $mb, $ml }) => `${$mt} ${$mr} ${$mb} ${$ml}`};
  border-radius: ${({ $type }) => ($type === 'circle' ? '50%' : '0.5rem')};
  background: rgb(242, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(238, 232, 241, 1) 50%,
    rgba(242, 242, 242, 1) 100%
  );
  background-size: 200% 200%;
  animation: ${shimmer} 1s infinite linear;
`;
