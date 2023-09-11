import { InventoryInterface } from 'interfaces/inventory';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  manufacturer: string;
  model_number: string;
  serial_number: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  hospital?: HospitalInterface;
  _count?: {
    inventory?: number;
  };
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  manufacturer?: string;
  model_number?: string;
  serial_number?: string;
  hospital_id?: string;
}
