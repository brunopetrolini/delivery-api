import { Clients, Deliveryman } from '@prisma/client';

export interface FindAllByDeliverymanResult {
  id: string;
  itemName: string;
  client: Partial<Clients>;
  deliveryman: Partial<Deliveryman>;
  createdAt: Date;
  endAt: Date | null;
}
