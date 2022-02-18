import { Request, Response } from 'express';
import { FindAvailableDeliveriesUsecase } from './find-available-deliveries-usecase';

export class FindAvailableDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAvailableDeliveriesUsecase = new FindAvailableDeliveriesUsecase();
    const result = await findAvailableDeliveriesUsecase.execute();

    return response.status(200).json(result);
  }
}
