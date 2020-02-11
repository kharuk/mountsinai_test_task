import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
`;
