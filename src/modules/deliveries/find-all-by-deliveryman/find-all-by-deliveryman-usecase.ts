import { prisma } from '../../../database/prisma-client';
import { FindAllByDeliverymanResult } from './find-all-by-deliveryman-interfaces';

export class FindAllByDeliverymanUsecase {
  async execute(idDeliveryman: string): Promise<FindAllByDeliverymanResult[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman: idDeliveryman,
      },
      include: {
        client: true,
        deliveryman: true,
      },
    });

    const formattedDeliveries = deliveries.map(delivery => ({
      id: delivery.id,
      itemName: delivery.item_name,
      client: {
        id: delivery.client.id,
        username: delivery.client.username,
      },
      deliveryman: {
        id: delivery.deliveryman?.id,
        username: delivery.deliveryman?.username,
      },
      createdAt: delivery.created_at,
      endAt: delivery.end_at,
    }));

    return formattedDeliveries;
  }
}
