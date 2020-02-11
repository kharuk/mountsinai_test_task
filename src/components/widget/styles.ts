import styled from 'styled-components';
import { colors } from 'shared/variables/colors';

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  background-color: ${colors.light};
  margin-left: 2.5rem;
  box-shadow: 2px 2px 8px 0px ${colors.shadow};
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-left: 0;
  }

  > div {
    &:first-child {
      margin-bottom: 0.7rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export const DoctorSchedule = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.grey};
  opacity: 0.4;
`;
