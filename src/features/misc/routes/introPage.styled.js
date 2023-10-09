import styled from 'styled-components';

import MainLogo from '@/assets/img/Group-21.svg';

export const IntroWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.purpleLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10rem;
`;

export const IntroLogoBox = styled.div`
  width: 33.4rem;
  height: 23.5rem;
  background-image: url(${MainLogo});
  background-repeat: no-repeat;
  margin: auto;
  margin-top: 1rem;
`;

export const IntroBtnBox = styled.div`
  padding: 5rem 3.4rem;
  border-radius: 2rem 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.white};
`;
