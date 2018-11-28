import path from 'path';

function createControllerRoutes(controllerUri) {
  const controllerPath = path.resolve(__dirname, '../modules', controllerUri);
  const Controller = require(controllerPath).default;

  return Controller();
}

export default createControllerRoutes;
