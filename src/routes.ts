import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensure-authenticate-client';
import { AuthenticateClientController } from './modules/accounts/authenticate-client/authenticate-client-controller';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticate-deliveryman/authenticate-deliveryman-controller';
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller';
import { CreateDeliveryController } from './modules/deliveries/create-delivery/create-delivery-controller';
import { CreateDeliverymanController } from './modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
routes.post('/clients/signin', authenticateClientController.handle);

const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
routes.post('/deliveryman/signin', authenticateDeliverymanController.handle);

const createDeliverymanController = new CreateDeliverymanController();
routes.post('/deliveryman', createDeliverymanController.handle);

const createDeliveryController = new CreateDeliveryController();
routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);

export { routes };
