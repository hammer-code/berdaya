import {Event} from './index';
import {
  createAttendee,
  createAttendance,
  createEvent,
} from '../../test-helpers';

function setup() {
  const attendee = createAttendee({email: 'awesome@mail.com'});
  const attendance = createAttendance({
    attendee,
  });

  const event = Event({
    id: 'event-01',
    name: 'Tech Talk #1',
    date: new Date(),
    venue: 'San Fransisco',
    coordinate: '0.0, 0.9',
    attendances: [attendance],
  });

  return {event, attendee};
}

describe('Event Entity', () => {
  describe('findAttendanceIndexByEmail', () => {
    test('should return correct index', () => {
      const {event} = setup();

      expect(event.findAttendanceIndexByEmail('awesome@mail.com')).toBe(0);
    });
  });

  describe('isAttendedBy', () => {
    test('should return correct flag', () => {
      const {event, attendee} = setup();
      const anotherAttendee = createAttendee({email: 'gilang@gmail.com'});

      expect(event.isAttendedBy(attendee)).toBe(true);
      expect(event.isAttendedBy(anotherAttendee)).toBe(false);
    });
  });
});
