import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const Header = styled.h1`
  font-size: 2.7rem;
  font-weight: 500;
  margin: 5rem auto 4rem auto;
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
  background-color: ${colors.light};
  margin-left: 2.5rem;
  box-shadow: 2px 2px 8px 0px ${colors.shadow};
  border-radius: 12px;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  &:first-child {
    margin-left: 0;
  }
`;
