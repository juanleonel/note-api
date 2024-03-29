import App from './app';
import { CONFIGURATIONS } from './config/configurations';

const portNumber =
  typeof CONFIGURATIONS.PORT_DEFUALT === 'string'
  ? parseInt(CONFIGURATIONS.PORT_DEFUALT)
  : CONFIGURATIONS.PORT_DEFUALT;

App.app.listen(portNumber, CONFIGURATIONS.HOST_NAME, () => {
  console.log('Listen on localhost:' + portNumber);
});
