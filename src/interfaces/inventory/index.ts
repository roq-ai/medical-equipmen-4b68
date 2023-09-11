import { EquipmentInterface } from 'interfaces/equipment';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  equipment_id: string;
  supplier_id: string;
  quantity: number;
  purchase_date: any;
  expiry_date?: any;
  created_at?: any;
  updated_at?: any;

  equipment?: EquipmentInterface;
  supplier?: SupplierInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  equipment_id?: string;
  supplier_id?: string;
}
