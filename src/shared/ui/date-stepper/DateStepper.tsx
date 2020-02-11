import React from 'react';
import { DateWrapper, Stepper, DateOutput } from './styles';
import { ChevronLeft as Left } from 'styled-icons/boxicons-regular/ChevronLeft';
import { ChevronRight as Right } from 'styled-icons/boxicons-regular/ChevronRight';
import { CalendarEvent } from 'styled-icons/boxicons-regular/CalendarEvent';
import moment from 'moment';

interface Props {
  selectedDate: Date;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
}

export const DateStepper: React.FC<Props> = ({ selectedDate, handlePreviousClick, handleNextClick }) => {
  /*   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); */
  return (
    <DateWrapper>
      <Stepper disabled={moment(selectedDate).isBefore()} onClick={handlePreviousClick}>
        <Left size="2.5rem" title="Previous" />
      </Stepper>
      <DateOutput>
        <span>{}</span>
        <CalendarEvent size="2rem" title="Calendar" />
      </DateOutput>
      <Stepper disabled={moment(selectedDate).isAfter(moment(new Date()).add(15, 'days'))} onClick={handleNextClick}>
        <Right size="2.5rem" title="Next" />
      </Stepper>
    </DateWrapper>
  );
};
