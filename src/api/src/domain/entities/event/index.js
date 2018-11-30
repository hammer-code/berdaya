import t from 'tcomb';
import {compose} from 'ramda';
import {cleanData} from '../../helpers';
import {ListOfAttendance} from '../attendance';

const _Event = t.struct(
  {
    id: t.maybe(t.String),
    name: t.String,
    date: t.Date,
    attendances: t.Type(ListOfAttendance),
    venue: t.String,
    coordinate: t.String,
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date),
  },
  {
    defaultProps: {
      attendances: [],
    },
  },
);

_Event.prototype.findAttendanceIndexByEmail = function(email) {
  return this.attendances.findIndex(
    attendance => attendance.attendee.email === email,
  );
};

_Event.prototype.isAttendedBy = function(attendee) {
  return this.findAttendanceIndexByEmail(attendee.email) !== -1;
};

export const Event = _Event;

export default compose(
  cleanData,
  _Event,
);
