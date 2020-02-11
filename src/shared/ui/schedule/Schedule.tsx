import React, { useReducer } from 'react';
import moment from 'moment';
import { ISchedule, IDoc } from 'types/docs';
import { DateStepper, ConfirmModal } from '..';
import { ScheduleContainer, TimetableList, TimeButton, DatePicker, Message } from './styles';

interface Props {
  schedule: Array<ISchedule>;
  docInfo: IDoc;
}

interface State {
  selectedDate: moment.Moment;
  selectedTime: string;
  index: number;
  isShowModal: boolean;
}

type StateAction =
  | { selectedDate: moment.Moment }
  | { selectedTime: string }
  | { index: number }
  | { isShowModal: boolean };

export const Schedule: React.FC<Props> = ({ schedule, docInfo }) => {
  const [{ selectedDate, selectedTime, index, isShowModal }, setState] = useReducer(
    (state: State, action: StateAction) => ({ ...state, ...action }),
    {
      selectedDate: schedule[0].day,
      index: 0,
      isShowModal: false,
      selectedTime: '',
    },
  );

  const handlePreviousClick = () => {
    setState({ selectedDate: moment(selectedDate).subtract(1, 'days'), index: index - 1 });
  };

  const handleNextClick = () => {
    setState({ selectedDate: moment(selectedDate).add(1, 'days'), index: index + 1 });
  };

  return (
    <ScheduleContainer>
      <DatePicker>
        <DateStepper
          selectedDate={selectedDate}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </DatePicker>
      {index < schedule.length && schedule[index].timetable.length ? (
        <TimetableList>
          {schedule[index].timetable.map((time) => (
            <TimeButton key={time.id} onClick={() => setState({ isShowModal: true, selectedTime: time.time })}>
              {time.time}
            </TimeButton>
          ))}
        </TimetableList>
      ) : (
        <Message>Unfortunately, there is no available appointments</Message>
      )}

      {isShowModal && (
        <ConfirmModal
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          docInfo={docInfo}
          isShowModal={isShowModal}
          handleClose={() => setState({ isShowModal: false })}
        />
      )}
    </ScheduleContainer>
  );
};
