import styled from 'styled-components';

export const CircleImage = styled.img`
  ${({ $size }) => `
    width: ${$size}px; 
    height: ${$size}px;
  `}
  border-radius: 50%;
`;
