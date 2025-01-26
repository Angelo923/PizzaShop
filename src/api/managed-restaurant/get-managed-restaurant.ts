import { api } from '@/lib/axios.ts';
import { IGetManagedRestaurantResponse } from '@/api/managed-restaurant/interface.ts';

async function getManagedRestaurant() {
  const response = await api.get<IGetManagedRestaurantResponse>(
    '/managed-restaurant',
  );

  return response.data;
}

export default getManagedRestaurant;
