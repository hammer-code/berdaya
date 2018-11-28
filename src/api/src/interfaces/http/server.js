import express from 'express';

function createServer({config, router, logger}) {
  const app = express();

  app.disable('x-powered-by');
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
