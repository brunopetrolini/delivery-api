import { prisma } from '../../../database/prisma-client';
import { UpdateDeliverymanParams, UpdateDeliverymanResult } from './update-deliveryman-interfaces';

export class UpdateDeliverymanUsecase {
  async execute(params: UpdateDeliverymanParams): Promise<UpdateDeliverymanResult> {
    const updatedDelivery = await prisma.deliveries.update({
      where: {
        id: params.idDelivery,
      },
      data: {
        id_deliveryman: params.idDeliveryman,
      },
      include: {
        client: true,
        deliveryman: true,
      },
    });

    return {
      id: updatedDelivery.id,
      itemName: updatedDelivery.item_name,
      client: {
        id: updatedDelivery.client.id,
        username: updatedDelivery.client.username,
      },
      deliveryman: {
        id: updatedDelivery.deliveryman?.id,
        username: updatedDelivery.deliveryman?.username,
      },
      createdAt: updatedDelivery.created_at,
    };
  }
}
