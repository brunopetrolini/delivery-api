import { Request, Response } from 'express';
import { AuthenticateClientParams } from './authenticate-client-interfaces';
import { AuthenticateClientUsecase } from './authenticate-client-usecase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body as AuthenticateClientParams;

    const authenticateClientUsecase = new AuthenticateClientUsecase();
    const result = await authenticateClientUsecase.execute({ username, password });

    return response.status(200).json(result);
  }
}
