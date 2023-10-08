import { useState } from 'react';

const useTag = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const tagList = ['음악', '미술'];
  const tagRegex = /\[tag:([^\]]+)\]/;

  const selectTag = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const addTagToContent = (content) => {
    if (selectedTag) {
      return `[tag: ${selectedTag}]` + content;
    }
    return content;
  };

  const getContentInText = (text) => {
    return text.replace(tagRegex, '');
  };

  const getTagInText = (text) => {
    return text.match(tagRegex)?.[0].slice(6, -1);
  };

  const checkTagInText = (text) => {
    if (text.includes(`[tag: ${selectedTag}]`)) {
      return true;
    }
    return false;
  };

  const filterPostPages = (postPages) => {
    if (selectedTag === null) {
      return postPages;
    } else {
      return postPages.map((page) =>
        page.filter((post) => checkTagInText(post.content)),
      );
    }
  };

  return {
    tagList,
    selectedTag,
    selectTag,
    filterPostPages,
    addTagToContent,
    getTagInText,
    getContentInText,
  };
};

export default useTag;
