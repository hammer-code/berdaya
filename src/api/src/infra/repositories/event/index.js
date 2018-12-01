import toEntity from '../../../domain/entities/event';

export default function createEventRepository(model) {
  function create(event) {
    return model.create(event).then(toEntity);
  }

  function findById(eventId) {
    return Promise.resolve({data: 'dummy'});
  }

  function getAll() {
    return model.find({}).then(docs => docs.map(toEntity));
  }

  return {
    create,
    getAll,
  };
}
