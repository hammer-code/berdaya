import {Event} from '../entities/event';
import {CannotAttendTwiceError} from '../errors';
import {Attendance, ListOfAttendance} from '../entities/attendance';

export function attendEvent(event, attendee) {
  if (event.isAttendedBy(attendee)) {
    throw new CannotAttendTwiceError(event, attendee);
  }

  const attendance = Attendance({
    eventId: event.id,
    attendee,
    attendAt: new Date(),
  });

  return Event.update(event, {
    attendances: {$push: [attendance]},
  });
}

export default {
  attendEvent,
};
