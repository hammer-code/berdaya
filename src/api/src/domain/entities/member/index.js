import t from 'tcomb';
import {compose} from 'ramda';
import {cleanData} from '../../helpers';

export const Member = t.struct({
  id: t.maybe(t.String),
  name: t.String,
  email: t.String,
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date),
});

export default compose(
  cleanData,
  Member,
);
