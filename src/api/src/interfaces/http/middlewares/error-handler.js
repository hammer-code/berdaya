import httpStatus from 'http-status';

/* istanbul ignore next */
export default function errorHandler(
  err,
  request,
  response,
  next,
  logger,
  config,
) {
  // eslint-disable-line no-unused-vars
  logger.error(err);

  const errorResponse = Object.assign(
    {
      type: 'InternalServerError',
    },
    config.env === 'development' && {
      message: err.message,
      stack: err.stack,
    },
  );

  response.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResponse);
}
