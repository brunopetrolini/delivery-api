import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prisma-client';
import { AuthenticateClientParams, AuthenticateClientResult } from './authenticate-client-interfaces';

export class AuthenticateClientUsecase {
  async execute(user: AuthenticateClientParams): Promise<AuthenticateClientResult> {
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          equals: user.username,
          mode: 'insensitive',
        },
      },
    });

    if (!client) {
      throw new Error('Incorrect username or password.');
    }

    const validPassword = compare(client.password, user.password);

    if (!validPassword) {
      throw new Error('Incorrect username or password.');
    }

    const jwtSecret = String(process.env.JWT_SECRET);
    const accessToken = sign({ username: user.username }, jwtSecret, {
      subject: client.id,
      expiresIn: '1d',
    });

    return { token: accessToken };
  }
}
