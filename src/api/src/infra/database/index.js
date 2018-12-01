import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function database({config}) {
  function connect() {
    return mongoose.connect(
      config.db.uri,
      {
        useNewUrlParser: true,
      },
    );
  }

  return {
    connect,
  };
}

export default database;
