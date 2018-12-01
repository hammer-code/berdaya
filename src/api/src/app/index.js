/**
 * We want to start here so we can manage other infrastructure
 * database
 * redis
 * express server
 */
export default function createApp({server, database}) {
  return {
    start: () =>
      Promise.resolve()
        .then(database.connect)
        .then(server.start),
  };
}
