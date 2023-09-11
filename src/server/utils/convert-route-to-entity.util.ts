const mapping: Record<string, string> = {
  customers: 'customer',
  equipment: 'equipment',
  hospitals: 'hospital',
  inventories: 'inventory',
  suppliers: 'supplier',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
