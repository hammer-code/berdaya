import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function database({config}) {
  function connect() {
    return mongoose
      .connect(
        config.db.uri,
        {
          useNewUrlParser: true,
        },
      )
      .then(self => self.connection);
  }

  function disconnect(connection) {
    connection.close();
  }

  async function purgeCollection(connection) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < connection.collections.length; i++) {
      const collection = connection.collections[i];

      collection.collection.remove();
    }
  }

  return {
    connect,
    disconnect,
    purgeCollection,
  };
}

export default database;
