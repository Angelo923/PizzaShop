import { api } from '@/lib/axios.ts';
import { IregisterRestaurant } from '@/api/register-restaurant/interfaces.ts';

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
