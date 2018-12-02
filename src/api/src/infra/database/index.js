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
    // eslint-disable-next-line no-restricted-syntax
    for (const collectionName in connection.collections) {
      if (
        connection.collections.hasOwnProperty.call(
          connection.collections,
          collectionName,
        )
      ) {
        const collection = connection.collections[collectionName];
        collection.collection.remove();
      }
    }
  }

  return {
    connect,
    disconnect,
    purgeCollection,
  };
}

export default database;
