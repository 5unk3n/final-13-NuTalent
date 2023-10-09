import { styled } from 'styled-components';

export const MainLayout = styled.div`
  min-height: 100vh;
`;

export const HeaderRoot = styled.header`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 4.8rem;
  /* padding: 0 1.6rem; */
  border-bottom: ${({ theme }) => theme.color.gray[400]} 0.05rem solid;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* gap: 1rem; */
  background-color: ${({ theme }) => theme.color.white};
`;

export const Main = styled.main`
  padding-top: 4.8rem;
  max-width: 700px;
  margin: 0 auto;
`;
