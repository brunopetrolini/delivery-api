import { Deliveries } from '@prisma/client';
import { prisma } from '../../../database/prisma-client';

export class FindAvailableDeliveriesUsecase {
  async execute(): Promise<Deliveries[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
      },
      include: {
        client: true,
      },
    });

    return deliveries;
  }
}
