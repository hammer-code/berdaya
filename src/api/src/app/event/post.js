import Validator from 'validatorjs';

export default function createEvent({eventRepository}) {
  function create(data) {
    // todo: do validation here
    const validation = new Validator(data, {
      name: 'required|min:3',
      date: 'required',
      venue: 'required',
      coordinate: 'required',
    });

    if (validation.fails()) {
      const error = new Error('Request body does not comply with input rules');
      error.name = 'InputValidation';
      error.data = validation.errors;

      return Promise.reject(error);
    }

    return eventRepository.create(data);
  }

  return {
    create,
  };
}
