import { api } from '@/lib/axios.ts';
import { IGetMonthCanceledOrdersAmountResponse } from '@/api/get-month-canceled-orders-amount/interfaces.ts';

async function getMonthCanledOrdersAmount() {
  const response = await api.get<IGetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  );

  return response.data;
}

export default getMonthCanledOrdersAmount;
