import { styled } from 'styled-components';

import xbtn from '../../../assets/img/x.svg';

export const EditorWrapper = styled.div`
  position: relative;
  padding: 3.2rem 1.6rem 2rem 7rem;
`;

export const ProfileImageWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 1.6rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-bottom: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[400]};
  }
`;

export const imageWrapper = styled.div`
  position: relative;
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
  object-fit: contain;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background: url(${xbtn}) 0 0 / cover;
`;

export const ImageUploaderWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 1.6rem;
`;
