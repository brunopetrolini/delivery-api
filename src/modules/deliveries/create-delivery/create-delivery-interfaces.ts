export interface CreateDeliveryParams {
  itemName: string;
  idClient: string;
}

export interface CreateDeliveryResult {
  id: string;
  itemName: string;
  idClient: string;
  createdAt: Date;
}
