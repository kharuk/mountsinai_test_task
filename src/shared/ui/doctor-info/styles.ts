import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-left: 1rem;
  font-weight: 400;
`;
