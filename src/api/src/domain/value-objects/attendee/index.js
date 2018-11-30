import t from 'tcomb';
import {compose} from 'ramda';
import {cleanData} from '../../helpers';

export const Attendee = t.struct({
  memberId: t.maybe(t.String),
  name: t.String,
  email: t.String,
  phone: t.maybe(t.String),
});

export const ListOfAttendee = t.list(Attendee);

export default compose(
  cleanData,
  Attendee,
);
