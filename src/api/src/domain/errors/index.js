import ExtendableError from 'es6-error';

export class CannotAttendTwiceError extends ExtendableError {
  constructor(event, attendee) {
    const message = `${attendee.email} is already attend the ${event.name}`;
    super(message);
  }
}

export default {
  CannotAttendTwiceError,
};
