import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 3rem;
  margin: 0 auto;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  color: ${colors.text};
  margin-left: 1.3rem;
  font-weight: 400;
`;
