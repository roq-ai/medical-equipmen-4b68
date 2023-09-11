interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['System Administrator', 'Inventory Manager', 'Supply Chain Manager'],
  tenantName: 'Hospital',
  applicationName: 'Medical Equipment Inventory Management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View inventory of medical equipment at different hospitals',
    'Search for specific medical equipment in the inventory',
    'View details of the medical equipment in the inventory',
  ],
  ownerAbilities: ['Manage hospitals in the system'],
};
