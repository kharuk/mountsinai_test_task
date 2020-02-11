import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const DefaultButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  pointer-events: 'auto';
  text-decoration: none;
  background: transparent;
  outline: none;
  transition: 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: 0.5s;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
  }

  &:active {
    background-color: ${colors.primary};
    opacity: 0.5;
  }
`;

export const RoundButton = styled(DefaultButton)`
  border-radius: 50%;
  background: ${colors.primary};
  opacity: 0.4;
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-out;

  &:hover {
    background-color: ${colors.primary};
    opacity: 0.3;
    transform: scale(1.1);
  }

  &:disabled {
    background-color: ${colors.disabled};
  }
  &:active {
    background-color: ${colors.primary};
    opacity: 0.5;
  }

  svg {
    color: ${colors.white};
  }
`;
