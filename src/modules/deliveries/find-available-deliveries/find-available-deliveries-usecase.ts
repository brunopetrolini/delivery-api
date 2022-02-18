import { prisma } from '../../../database/prisma-client';
import { FindAvailableDeliveriesResult } from './find-available-deliveries-interfaces';

export class FindAvailableDeliveriesUsecase {
  async execute(): Promise<FindAvailableDeliveriesResult[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
      include: {
        client: true,
      },
    });

    const formattedDeliveries = deliveries.map(delivery => ({
      id: delivery.id,
      itemName: delivery.item_name,
      client: {
        id: delivery.client.id,
        username: delivery.client.username,
      },
      createdAt: delivery.created_at,
    }) as FindAvailableDeliveriesResult);

    return formattedDeliveries;
  }
}
