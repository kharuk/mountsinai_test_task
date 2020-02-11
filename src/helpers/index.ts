import moment from 'moment';
import { ITimetable } from '../types/docs';

export const generateTimeWithPeriod = (startTime: string, endTime: string, interval: number) => {
  const MINUTES = 60;
  const periods = moment(endTime, 'hh:mm').diff(moment(startTime, 'hh:mm'), 'hours');
  const timeLabels: Array<ITimetable> = [];
  const startTimeMoment = moment(startTime, 'hh:mm');
  for (let i = 0; i <= periods * MINUTES; i += interval) {
    startTimeMoment.add(i === 0 ? 0 : interval, 'minutes');
    timeLabels.push({
      id: i.toString(),
      time: startTimeMoment.format('hh:mm A'),
    });
  }

  return timeLabels;
};

export const getWidgetAmount = (width: string) => {
  switch (width) {
    case 'xs':
      return 1;
    case 'sm':
      return 1;
    case 'md':
      return 2;
    case 'lg':
      return 3;
    case 'xl':
      return 3;
    default:
      return 1;
  }
};
