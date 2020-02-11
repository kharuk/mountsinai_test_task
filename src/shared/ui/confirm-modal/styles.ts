import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const Header = styled.h2`
  font-size: 1.7rem;
  color: ${colors.text};
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${colors.text};
  font-weight: 400;
  margin-bottom: 1rem;

  span {
    font-weight: 700;
  }
`;
