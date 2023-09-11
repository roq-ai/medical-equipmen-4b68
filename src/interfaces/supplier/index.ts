import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  name: string;
  contact_person: string;
  contact_number: string;
  email_address: string;
  address: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];

  _count?: {
    inventory?: number;
  };
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_person?: string;
  contact_number?: string;
  email_address?: string;
  address?: string;
}
