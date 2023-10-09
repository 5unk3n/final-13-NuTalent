export const adjustTextareaHeight = (textareaRef) => {
  textareaRef.current.style.height = 'auto';
  textareaRef.current.style.height = `${
    textareaRef.current.scrollHeight / 10
  }rem`;
};
