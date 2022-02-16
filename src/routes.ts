import { Router } from 'express';
import { AuthenticateClientController } from './modules/accounts/authenticate-client/authenticate-client-controller';
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
routes.post('/clients/signin', authenticateClientController.handle);

const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

export { routes };
