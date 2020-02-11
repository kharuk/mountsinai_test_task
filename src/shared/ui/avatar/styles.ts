import styled, { css } from 'styled-components';

interface AvatarContainer {
  size?: number;
  isLink?: boolean;
}

export const AvatarContainer = styled.div<AvatarContainer>`
  width: ${({ size }) => (!!size ? `${size}px` : '100%')};
  height: ${({ size }) => (!!size ? `${size}px` : '100%')};
  min-width: ${({ size }) => (!!size ? `${size}px` : '100%')};
  min-height: ${({ size }) => (!!size ? `${size}px` : '100%')};
  ${({ isLink }) =>
    isLink &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
