import React from 'react';
import { DateWrapper, Stepper, DateOutput } from './styles';
import { ChevronLeft as Left } from 'styled-icons/boxicons-regular/ChevronLeft';
import { ChevronRight as Right } from 'styled-icons/boxicons-regular/ChevronRight';
import { CalendarEvent } from 'styled-icons/boxicons-regular/CalendarEvent';
import moment from 'moment';

interface Props {
  selectedDate: moment.Moment;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
}

export const DateStepper: React.FC<Props> = ({ selectedDate, handlePreviousClick, handleNextClick }) => {
  return (
    <DateWrapper>
      <Stepper disabled={moment(selectedDate).isBefore()} onClick={handlePreviousClick}>
        <Left size="2rem" title="Previous" />
      </Stepper>
      <DateOutput>
        <span>{moment(selectedDate).format('MMM DD, YYYY')}</span>
        <CalendarEvent size="1.8rem" title="Calendar" />
      </DateOutput>
      <Stepper onClick={handleNextClick}>
        <Right size="2rem" title="Next" />
      </Stepper>
    </DateWrapper>
  );
};
