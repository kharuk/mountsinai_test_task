import moment from 'moment';

export interface IDoc {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface IDocFullInfo extends IDoc {
  schedule: Array<ISchedule>;
}

export interface ISchedule {
  day: moment.Moment;
  timetable: Array<ITimetable>;
}

export interface ITimetable {
  id: string;
  time: string;
}
