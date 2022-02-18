import { Clients } from '@prisma/client';

export interface FindAvailableDeliveriesResult {
  id: string;
  itemName: string;
  client: Partial<Clients>;
  createdAt: Date;
}
