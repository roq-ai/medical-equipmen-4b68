import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  contact_number: string;
  email_address: string;
  address: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  contact_number?: string;
  email_address?: string;
  address?: string;
}
