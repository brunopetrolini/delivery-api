import { Request, Response } from 'express';
import { FindAllByClientUsecase } from './find-all-by-client-usecase';

export class FindAllByClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const idClient = request.userId;

    const findAllByClientUsecase = new FindAllByClientUsecase();
    const result = await findAllByClientUsecase.execute(idClient);

    return response.status(200).json(result);
  }
}
