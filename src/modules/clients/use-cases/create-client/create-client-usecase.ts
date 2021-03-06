import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prisma-client';
import { CreateClientParams, CreateClientResult } from './create-client-interfaces';

export class CreateClientUsecase {
  async execute(client: CreateClientParams): Promise<CreateClientResult> {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: client.username,
          mode: 'insensitive',
        },
      },
    });

    if (clientExists) {
      throw new Error('Client already exists.');
    }

    const hashedPassword = await hash(client.password, 12);

    const createdClient = await prisma.clients.create({
      data: {
        username: client.username,
        password: hashedPassword,
      },
    });

    return { id: createdClient.id };
  }
}
