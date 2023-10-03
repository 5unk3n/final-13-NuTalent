import React from 'react';

import Button from '../Button/Button';

import * as S from './TagBar.styled';

export default function TagBar({ tagList, selectedTag, selectTag }) {
  return (
    <S.TagBarWrapper>
      <S.TagList>
        {tagList.map((tag) => (
          <li key={tag}>
            <Button
              type="button"
              onClick={(e) => selectTag(e.target.innerText)}
              color={tag === selectedTag ? 'fill' : 'outline'}
              size="s"
            >
              {tag}
            </Button>
          </li>
        ))}
      </S.TagList>
    </S.TagBarWrapper>
  );
}
