export default function getEvents({eventRepository}) {
  function getAll() {
    return eventRepository.getAll();
  }

  return {
    getAll,
  };
}
