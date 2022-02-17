import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prisma-client';
import { AuthenticateDeliverymanParams, AuthenticateDeliverymanResult } from './authenticate-deliveryman-interfaces';

export class AuthenticateDeliverymanUsecase {
  async execute(user: AuthenticateDeliverymanParams): Promise<AuthenticateDeliverymanResult> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: user.username,
          mode: 'insensitive',
        },
      },
    });

    if (!deliveryman) {
      throw new Error('Incorrect username or password.');
    }

    const validPassword = await compare(user.password, deliveryman.password);
    if (!validPassword) {
      throw new Error('Incorrect username or password');
    }

    const jwtSecret = String(process.env.JWT_SECRET);
    const accessToken = sign({ username: deliveryman.username }, jwtSecret, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return { token: accessToken };
  }
}
