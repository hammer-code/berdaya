import t from 'tcomb';
import {compose} from 'ramda';
import {Attendee} from '../../value-objects/attendee';
import {cleanData} from '../../helpers';

export const Attendance = t.struct({
  id: t.maybe(t.String),
  eventId: t.maybe(t.String),
  attendee: t.Type(Attendee),
  rating: t.maybe(t.Number),
  feedback: t.maybe(t.String),
  attendAt: t.Date,
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date),
});

export const ListOfAttendance = t.list(Attendance);

export default compose(
  cleanData,
  Attendance,
);
