import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin: 3rem auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoctorListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

export const DoctorItem = styled.div`
  padding: 2rem 3rem;
  background-color: ${colors.solitude};
  border: 1px solid ${colors.grey};
  margin-left: 2.5rem;
  box-shadow: 4px 2px 8px 0px ${colors.quartz};

  &:first-child {
    margin-left: 0;
  }
`;
