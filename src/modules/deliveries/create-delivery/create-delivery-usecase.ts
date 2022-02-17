import { prisma } from '../../../database/prisma-client';
import { CreateDeliveryParams, CreateDeliveryResult } from './create-delivery-interfaces';

export class CreateDeliveryUsecase {
  async execute(delivery: CreateDeliveryParams): Promise<CreateDeliveryResult> {
    const createdDelivery = await prisma.deliveries.create({
      data: {
        item_name: delivery.itemName,
        id_client: delivery.idClient,
      },
    });

    return {
      id: createdDelivery.id,
      itemName: createdDelivery.item_name,
      idClient: createdDelivery.id_client,
      createdAt: createdDelivery.created_at,
    };
  }
}
