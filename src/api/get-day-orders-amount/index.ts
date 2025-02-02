import { api } from '@/lib/axios.ts';
import { IGetDayOrdersAmountResponse } from '@/api/get-day-orders-amount/interfaces.ts';

async function getDayOrdersAmount() {
  const response = await api.get<IGetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  );

  return response.data;
}

export default getDayOrdersAmount;
