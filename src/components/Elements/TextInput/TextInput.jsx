import React, { createContext, forwardRef, useContext, useId } from 'react';

import * as S from './TextInput.styled';

const InputContext = createContext(null);

export default function TextInput({ label, children, ...props }) {
  const child = React.Children.only(children);
  const error = child.props.error;
  const generatedId = useId();
  const id = child.props.id || `text-input-${generatedId}`;

  return (
    <InputContext.Provider value={{ id }}>
      <S.InputWrapper {...props}>
        <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
        {child}
        {error && (
          <S.BottomText $isError={Boolean(error)}>{error}</S.BottomText>
        )}
      </S.InputWrapper>
    </InputContext.Provider>
  );
}

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === null) {
    throw new Error(
      'useInputContext must be used within a TextInput component',
    );
  }
  return context;
};

const TextField = forwardRef(({ error, ...props }, ref) => {
  const { id } = useInputContext();

  return (
    <S.InputField
      ref={ref}
      id={id}
      type="text"
      $isError={Boolean(error)}
      {...props}
    />
  );
});

TextField.displayName = 'TextField';
TextInput.TextField = TextField;
