import { Request, Response } from 'express';
import { AuthenticateDeliverymanParams } from './authenticate-deliveryman-interfaces';
import { AuthenticateDeliverymanUsecase } from './authenticate-deliveryman-usecase';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body as AuthenticateDeliverymanParams;

    const authenticateDeliverymanUsecase = new AuthenticateDeliverymanUsecase();
    const result = await authenticateDeliverymanUsecase.execute({ username, password });

    return response.status(200).json(result);
  }
}
