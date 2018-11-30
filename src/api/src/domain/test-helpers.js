import {Event} from './entities/event';
import {Attendance} from './entities/attendance';
import {Attendee} from './value-objects/attendee';

export const createEvent = (data = {}) =>
  Event({
    id: 'event-01',
    name: 'Techtalk',
    date: new Date(),
    venue: 'Innovative Lab',
    coordinate: '0.0,0.0',
    ...data,
  });

export const createAttendee = (data = {}) =>
  Attendee({
    name: 'Alex',
    email: 'alex@gmail.com',
    ...data,
  });

export const createAttendance = (data = {}) =>
  Attendance({
    attendee: data.attendee,
    eventId: data.eventId,
    attendAt: new Date(),
    ...data,
  });
