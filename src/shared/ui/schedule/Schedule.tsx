import React from 'react';
import { ScheduleContainer, TimetableList, TimeButton, DatePicker, Message } from './styles';
import { ISchedule } from 'types/docs';
import { DateStepper } from '..';

interface Props {
  schedule: Array<ISchedule>;
}

export const Schedule: React.FC<Props> = ({ schedule }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  return (
    <ScheduleContainer>
      <DatePicker>{/*  <DateStepper /> */}</DatePicker>
      {schedule[0].timetable.length ? (
        <TimetableList>
          {schedule[0].timetable.map((time) => (
            <TimeButton key={time.id}>{time.time}</TimeButton>
          ))}
        </TimetableList>
      ) : (
        <Message>Unfortunately, there's no available appointments</Message>
      )}
    </ScheduleContainer>
  );
};
