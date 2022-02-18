import { Clients, Deliveryman } from '@prisma/client';

export interface FindAllByClientResult {
  id: string;
  itemName: string;
  client: Partial<Clients>;
  deliveryman: Partial<Deliveryman>;
  createdAt: Date;
  endAt: Date;
}
