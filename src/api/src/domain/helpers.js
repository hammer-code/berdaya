import {complement, compose, isNil, pickBy} from 'ramda';

const notNull = compose(complement(isNil));

/**
 * we need to remove undefined array means not required data.
 */
export const cleanData = entity => pickBy(notNull, entity);

export default {
  cleanData,
};
