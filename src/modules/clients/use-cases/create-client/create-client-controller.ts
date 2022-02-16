import { Request, Response } from 'express';
import { CreateClientParams, CreateClientUsecase } from './create-client-usecase';

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createClientUsecase = new CreateClientUsecase();

    const { username, password } = request.body as CreateClientParams;
    const result = await createClientUsecase.execute({ username, password });

    return response.status(201).json(result);
  }
}
