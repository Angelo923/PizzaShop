import { api } from '@/lib/axios.ts';
import { IGetMonthOrdersAmountResponse } from '@/api/get-month-orders-amount/interfaces.ts';

async function getMonthOrdersAmount() {
  const response = await api.get<IGetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  );

  return response.data;
}

export default getMonthOrdersAmount;
