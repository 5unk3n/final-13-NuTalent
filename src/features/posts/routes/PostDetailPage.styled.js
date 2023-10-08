import styled, { css } from 'styled-components';

export const SectionStyle = css`
  padding: 2rem 1.6rem;
`;

export const PostSection = styled.section`
  ${SectionStyle}
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray[400]};
`;

export const CommentSection = styled.section`
  ${SectionStyle}
`;
