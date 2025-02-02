import { api } from '@/lib/axios.ts';
import { IgetMonthRevenueResponse } from '@/api/get-month-revenue/interfaces.ts';

async function getMonthRevenue() {
  const response = await api.get<IgetMonthRevenueResponse>(
    '/metrics/month-receipt',
  );

  return response.data;
}

export default getMonthRevenue;
