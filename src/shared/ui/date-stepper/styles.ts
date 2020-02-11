import styled from 'styled-components';
import { RoundButton } from '../button/styles';
import { colors } from 'shared/variables/colors';

export const DateWrapper = styled.div`
  display: flex;
`;

export const Stepper = styled(RoundButton)`
  background: transparent;
  border-radius: none;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease-out;

  &:hover {
    opacity: 0.3;
    transform: scale(1.1);
  }

  &:disabled {
    color: ${colors.disabled};
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
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.text};
`;
