import moment from 'moment';
import { generateTimeWithPeriod } from 'helpers';
import { IDoc } from '../types/docs';

const doc = {
  id: '1',
  firstName: 'Samuel',
  lastName: 'Altstein',
  avatar:
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',

  schedule: [
    { day: moment(new Date()), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
    { day: moment(new Date()).add(1, 'days'), timetable: [] },
    { day: moment(new Date()).add(2, 'days'), timetable: generateTimeWithPeriod('9:00', '12:00', 10) },
    { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
  ],
};

const data: [IDoc] = [doc];

export const getDocs = () => new Promise<IDoc[]>((res) => setTimeout(() => res(data), 1000));
