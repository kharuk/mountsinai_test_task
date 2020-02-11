import moment from 'moment';
import { generateTimeWithPeriod } from 'helpers';
import { IDocFullInfo, IDoc } from '../types/docs';

const schedules = [
  {
    id: '1',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: [] },
      { day: moment(new Date()).add(2, 'days'), timetable: generateTimeWithPeriod('9:00', '12:00', 30) },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
    ],
  },

  {
    id: '2',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: [] },
      { day: moment(new Date()).add(2, 'days'), timetable: [] },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
    ],
  },

  {
    id: '3',
    schedule: [
      { day: moment(new Date()), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
      { day: moment(new Date()).add(1, 'days'), timetable: generateTimeWithPeriod('9:00', '12:00', 20) },
      { day: moment(new Date()).add(2, 'days'), timetable: [] },
      { day: moment(new Date()).add(3, 'days'), timetable: generateTimeWithPeriod('8:00', '16:05', 10) },
    ],
  },
];

const docs = [
  {
    id: '1',
    firstName: 'Samuel',
    lastName: 'Altstein',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  },

  {
    id: '2',
    firstName: 'John',
    lastName: 'Smit',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },

  {
    id: '3',
    firstName: 'Barbara',
    lastName: 'Smit',
    avatar:
      'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
  },
];

export const getDocs = () => new Promise<IDoc[]>((res) => setTimeout(() => res(docs), 1000));

export const getDoctorById = (id: string) =>
  new Promise<IDocFullInfo>((res, reject) =>
    setTimeout(() => {
      const doctor = docs.find((doctor) => doctor.id === id);
      const doctorSchedule = schedules.find((item) => {
        item.id === id;
      });
      if (doctor && doctorSchedule) {
        res({
          id: doctor.id,
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          avatar: doctor.avatar,
          schedule: doctorSchedule.schedule,
        });
      }
      reject(`Unable to find doctor with id = ${id}`);
    }, 1000),
  );
