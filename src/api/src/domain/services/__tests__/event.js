import * as EventService from '../event';
import {CannotAttendTwiceError} from '../../errors';
import {createAttendee, createEvent} from '../../test-helpers';

function setup() {
  const event = createEvent({
    id: 'event-xyz',
  });
  const attendeeA = createAttendee({
    name: 'Alex',
    email: 'alex@gmail.com',
  });
  const attendeeB = createAttendee({
    name: 'Bob',
    email: 'bob@gmail.com',
  });

  return {event, attendeeA, attendeeB};
}

describe('attendEvent', () => {
  test('should able to add attendance', () => {
    // eslint-disable-next-line prefer-const
    let {event, attendeeA, attendeeB} = setup();

    expect(event.attendances.length).toBe(0);

    event = EventService.attendEvent(event, attendeeA);
    event = EventService.attendEvent(event, attendeeB);

    /**
     * Assertions:
     * - attendance count and eventId should be correct
     * - attendance date should be filled
     * - attendee name should be correct
     */
    expect(event.attendances.length).toBe(2);
    expect(event.attendances[0].eventId).toBe('event-xyz');
    expect(event.attendances[0].attendee.name).toBe('Alex');
    expect(event.attendances[0].attendAt instanceof Date).toBe(true);
    expect(event.attendances[1].eventId).toBe('event-xyz');
    expect(event.attendances[1].attendee.name).toBe('Bob');
    expect(event.attendances[1].attendAt instanceof Date).toBe(true);
  });

  test('same email should not able to be attend twice', () => {
    // eslint-disable-next-line prefer-const
    let {event, attendeeA} = setup();
    const attendeeB = createAttendee({
      email: 'alex@gmail.com',
    });

    expect(event.attendances.length).toBe(0);

    event = EventService.attendEvent(event, attendeeA);

    try {
      EventService.attendEvent(event, attendeeB);
    } catch (err) {
      expect(err instanceof CannotAttendTwiceError).toBe(true);
    }
  });
});
