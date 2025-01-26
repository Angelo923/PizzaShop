import { api } from '@/lib/axios.ts';
import { IregisterRestaurant } from '@/api/interfaces.ts';

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: IregisterRestaurant) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
