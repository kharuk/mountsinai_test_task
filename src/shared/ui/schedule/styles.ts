import styled from 'styled-components';
import { colors } from '../../variables/colors';
import { Button } from '..';
import { DefaultButton } from '../button/styles';

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
`;

export const TimetableList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

export const DatePicker = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const TimeButton = styled(DefaultButton)`
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  border-radius: 4px;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #5c5c5c;
  font-weight: 500;
  margin: 1rem 0 2rem 0;
`;
