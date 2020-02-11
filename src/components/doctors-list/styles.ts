import styled from 'styled-components';
import { colors } from 'shared/variables/colors';
import { RoundButton } from 'shared/ui/button/styles';

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
  position: relative;
`;

export const PreviousButton = styled(RoundButton)`
  position: absolute;
  left: 10px;
  top: 20px;
`;

export const NextButton = styled(RoundButton)`
  position: absolute;
  top: 20px;
  right: -35px;
`;
