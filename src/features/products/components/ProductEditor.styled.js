import styled from 'styled-components';

export const EditorWrapper = styled.div`
  padding: 3rem 3.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const PreviewImageWrapper = styled.div`
  margin-bottom: 1.4rem;
  aspect-ratio: 4/3;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.gray[100]};
  border: 0.5px solid ${({ theme }) => theme.color.gray[400]};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  & > span {
    display: inline-block;
    margin-bottom: 1.8rem;
    color: ${({ theme }) => theme.color.gray[500]};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const ImageUploaderWrapper = styled.div`
  position: absolute;
  right: 1.2rem;
  bottom: 2.6rem;
`;
