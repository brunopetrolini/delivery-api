import { Request, Response } from 'express';
import { CreateDeliverymanParams } from './create-deliveryman-interfaces';
import { CreateDeliverymanUsecase } from './create-deliveryman-usecase';

export class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body as CreateDeliverymanParams;

    const createDeliverymanUsecase = new CreateDeliverymanUsecase();
    const result = await createDeliverymanUsecase.execute({ username, password });

    return response.status(201).json(result);
  }
}
