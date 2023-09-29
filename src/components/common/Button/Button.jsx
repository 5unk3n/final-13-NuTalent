import React from 'react';
import * as S from './Button.styled';

/**
 * Button 컴포넌트는 클릭 가능한 버튼 또는 링크를 렌더링합니다.
 * @example
 * // 버튼 예제
 * <Button size="m" color="fill" onClick={handleClick}>버튼</Button>
 * @example
 * // 링크 예제
 * <Button to="/signin" size="m" color="outlineGrey">로그인으로 이동</Button>
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {ReactNode} props.children - 버튼 내부에 렌더링할 내용.
 * @param {string} [props.size='l'] - 버튼의 크기 ('l', 'm', 'ms', 's' 중 하나).
 * @param {string} props.width - 버튼의 너비 (예: '10rem').
 * @param {string} [props.color='fill'] - 버튼의 색상 ('fill', 'outline', 'outlineGrey' 중 하나).
 * @param {string} props.to - 링크의 목적지 경로 (링크로 사용할 때만 필요함).
 * @param {Object} props... - 기타 버튼에 적용할 HTML 속성들.
 * @returns {ReactNode} 렌더링된 버튼 또는 링크 컴포넌트.
 */
export default function Button({
  children,
  size = 'l',
  width,
  color = 'fill',
  to,
  ...props
}) {
  if (to) {
    return (
      <S.StyledLink to={to} size={size} width={width} color={color} {...props}>
        {children}
      </S.StyledLink>
    );
  } else {
    return (
      <S.StyledButton size={size} width={width} color={color} {...props}>
        {children}
      </S.StyledButton>
    );
  }
}
