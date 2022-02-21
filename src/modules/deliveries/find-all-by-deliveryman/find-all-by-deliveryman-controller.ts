import { Request, Response } from 'express';
import { FindAllByDeliverymanUsecase } from './find-all-by-deliveryman-usecase';

export class FindAllByDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const idDeliveryman = request.userId;

    const findAllByDeliverymanUsecase = new FindAllByDeliverymanUsecase();
    const result = await findAllByDeliverymanUsecase.execute(idDeliveryman);

    return response.status(200).json(result);
  }
}
