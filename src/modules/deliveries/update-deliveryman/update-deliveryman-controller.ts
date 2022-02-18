import { Request, Response } from 'express';
import { UpdateDeliverymanUsecase } from './update-deliveryman-usecase';

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idDelivery } = request.params;
    const idDeliveryman = request.userId;

    const updateDeliverymanUsecase = new UpdateDeliverymanUsecase();
    const result = await updateDeliverymanUsecase.execute({ idDelivery, idDeliveryman });

    return response.status(200).json(result);
  }
}
