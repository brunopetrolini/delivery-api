export interface CreateDeliveryParams {
  itemName: string;
  idClient: string;
}

interface Client {
  id: string;
  username: string;
}

export interface CreateDeliveryResult {
  id: string;
  itemName: string;
  client: Client;
  createdAt: Date;
}
