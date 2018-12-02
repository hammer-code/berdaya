import express from 'express';
import bodyParser from 'body-parser';

function createServer({config, router, logger}) {
  const app = express();

  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(router);

  return {
    app,
    start: function start() {
      return new Promise(resolve => {
        const http = app.listen(config.port, () => {
          const {port} = http.address();
          logger.info(`API Server running on port ${port}`);
        });
      });
    },
  };
}

export default createServer;
