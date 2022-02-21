import { prisma } from '../../../database/prisma-client';
import { UpdateEndDateParams } from './update-end-date-interfaces';

export class UpdateEndDateUsecase {
  async execute(params: UpdateEndDateParams): Promise<boolean> {
    const updatedDelivery = await prisma.deliveries.updateMany({
      where: {
        id: params.idDelivery,
        id_deliveryman: params.idDeliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return updatedDelivery.count > 0;
  }
}
