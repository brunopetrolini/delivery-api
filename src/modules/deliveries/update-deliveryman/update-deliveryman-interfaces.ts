import { Clients, Deliveryman } from '@prisma/client';

export interface UpdateDeliverymanParams {
  idDelivery: string;
  idDeliveryman: string;
}

export interface UpdateDeliverymanResult {
  id: string;
  itemName: string;
  client: Partial<Clients>;
  deliveryman: Partial<Deliveryman>;
  createdAt: Date;
}
