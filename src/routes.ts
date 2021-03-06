import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensure-authenticate-client';
import { ensureAuthenticateDeliveryman } from './middlewares/ensure-authenticate-deliveryman';
import { AuthenticateClientController } from './modules/accounts/authenticate-client/authenticate-client-controller';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticate-deliveryman/authenticate-deliveryman-controller';
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller';
import { CreateDeliveryController } from './modules/deliveries/create-delivery/create-delivery-controller';
import { FindAllByClientController } from './modules/deliveries/find-all-by-client/find-all-by-client-controller';
import { FindAllByDeliverymanController } from './modules/deliveries/find-all-by-deliveryman/find-all-by-deliveryman-controller';
import { FindAvailableDeliveriesController } from './modules/deliveries/find-available-deliveries/find-available-deliveries-controller';
import { UpdateDeliverymanController } from './modules/deliveries/update-deliveryman/update-deliveryman-controller';
import { UpdateEndDateController } from './modules/deliveries/update-end-date/update-end-date-controller';
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

const findAllByDeliverymanController = new FindAllByDeliverymanController();
routes.get('/deliveries/by-Deliveryman', ensureAuthenticateDeliveryman, findAllByDeliverymanController.handle);

const createDeliveryController = new CreateDeliveryController();
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);

const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
routes.get('/deliveries/available', ensureAuthenticateDeliveryman, findAvailableDeliveriesController.handle);

const updateDeliverymanController = new UpdateDeliverymanController();
routes.put('/deliveries/associate/:idDelivery', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

const findAllByClientController = new FindAllByClientController();
routes.get('/deliveries/by-client', ensureAuthenticateClient, findAllByClientController.handle);

const updateEndDateController = new UpdateEndDateController();
routes.put('/deliveries/finalize/:idDelivery', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };
