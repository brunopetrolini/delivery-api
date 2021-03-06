import { Request, Response } from 'express';
import { CreateDeliveryParams } from './create-delivery-interfaces';
import { CreateDeliveryUsecase } from './create-delivery-usecase';

export class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { itemName } = request.body as CreateDeliveryParams;
    const idClient = request.userId;

    const createDeliveryUsecase = new CreateDeliveryUsecase();
    const result = await createDeliveryUsecase.execute({ itemName, idClient });

    return response.status(201).json(result);
  }
}
