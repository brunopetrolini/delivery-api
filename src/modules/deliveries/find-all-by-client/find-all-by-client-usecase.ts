import { prisma } from '../../../database/prisma-client';
import { FindAllByClientResult } from './find-all-by-client-interfaces';

export class FindAllByClientUsecase {
  async execute(idClient: string): Promise<FindAllByClientResult[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client: idClient,
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
    }) as FindAllByClientResult);

    return formattedDeliveries;
  }
}
