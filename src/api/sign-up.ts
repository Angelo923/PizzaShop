import { api } from '@/lib/axios.ts';
import { ISignUp } from '@/api/interfaces.ts';

export async function signUp({
  restaurantName,
  managerName,
  email,
  phoneNumber,
}: ISignUp) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phoneNumber,
  });
}
