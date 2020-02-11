import moment from 'moment';
import { generateTimeWithPeriod } from 'helpers';
import { IDocFullInfo } from '../types/docs';

const docs = [
  {
    id: '1',
    firstName: 'Samuel',
    lastName: 'Altstein',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('8:00', '10:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: [] },
      { day: moment(new Date()).add(2, 'days'), timetable: generateTimeWithPeriod('9:00', '11:00', 30) },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '12:05', 10) },
    ],
  },

  {
    id: '2',
    firstName: 'John',
    lastName: 'Smit',
    avatar: 'https://nyulangone.org/images/doctors/f/feldman/1063432235/andrew-j-feldman-square.jpg',
    schedule: [
      { day: moment(new Date()), timetable: [] },
      { day: moment(new Date()).add(1, 'days'), timetable: [] },
      { day: moment(new Date()).add(2, 'days'), timetable: [] },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '10.05', 10) },
    ],
  },

  {
    id: '3',
    firstName: 'Barbara',
    lastName: 'Smit',
    avatar: 'https://www.datocms-assets.com/8490/1560828545-featureidrissheadshotuut47p.jpg',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('15:00', '17:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: generateTimeWithPeriod('9:00', '10:00', 20) },
      { day: moment(new Date()).add(2, 'days'), timetable: [] },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '10:05', 10) },
    ],
  },
  {
    id: '4',
    firstName: 'Annet',
    lastName: 'Smit',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('15:00', '17:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: generateTimeWithPeriod('9:00', '10:00', 20) },
      { day: moment(new Date()).add(2, 'days'), timetable: [] },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '10:05', 10) },
    ],
  },
];

export const getDocs = () => new Promise<IDocFullInfo[]>((res) => setTimeout(() => res(docs), 1000));
