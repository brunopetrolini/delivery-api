import { Request, Response } from 'express';
import { UpdateEndDateUsecase } from './update-end-date-usecase';

export class UpdateEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const idDeliveryman = request.userId;
    const { idDelivery } = request.params;

    const updateEndDateUsecase = new UpdateEndDateUsecase();
    const result = await updateEndDateUsecase.execute({ idDelivery, idDeliveryman });

    if (!result) {
      return response.status(400).json({ message: 'Delivery not found.' });
    }

    return response.status(204);
  }
}
