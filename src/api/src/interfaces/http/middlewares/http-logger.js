import morgan from 'morgan';

export default function httpLogger(logger) {
  return morgan('common', {
    stream: {
      write: message => {
        logger.info(message.slice(0, -1));
      },
    },
  });
}
