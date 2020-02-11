import moment from 'moment';

export interface IDoc {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  schedule: Array<ISchedule>;
}

export interface ISchedule {
  day: moment.Moment;
  timetable: Array<ITimetable>;
}

export interface ITimetable {
  id: string;
  time: string;
  isAvailable?: boolean;
}
