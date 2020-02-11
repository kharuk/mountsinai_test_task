import styled from 'styled-components';
import { RoundButton } from '../button/styles';
import { colors } from 'shared/variables/colors';

export const DateWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Stepper = styled(RoundButton)`
  background: transparent;
  border: none;
  transition: transform 0.3s ease-out;
  padding: 0;
  width: fit-content;
  height: fit-content;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    background-color: transparent;
    transform: scale(1.1);
  }

  &:disabled {
    color: ${colors.disabled};
    svg {
      color: ${colors.disabled};
    }
    background-color: transparent;
  }

  &:active {
    background-color: ${colors.primary};
    opacity: 0.5;
  }

  svg {
    color: ${colors.primary};
  }
`;

export const DateOutput = styled.p`
  user-select: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.text};
  margin: 0 0.5rem;
  span {
    margin-right: 0.5rem;
  }

  svg {
    margin-bottom: 0.3rem;
  }
`;
