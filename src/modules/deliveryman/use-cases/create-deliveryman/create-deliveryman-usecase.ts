import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prisma-client';
import { CreateDeliverymanParams, CreateDeliverymanResult } from './create-deliveryman-interfaces';

export class CreateDeliverymanUsecase {
  async execute(deliveryman: CreateDeliverymanParams): Promise<CreateDeliverymanResult> {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: deliveryman.username,
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists.');
    }

    const hashedPassword = await hash(deliveryman.password, 12);

    const createdDeliveryman = await prisma.deliveryman.create({
      data: {
        username: deliveryman.username,
        password: hashedPassword,
      },
    });

    return { id: createdDeliveryman.id };
  }
}
