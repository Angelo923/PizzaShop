import { api } from '@/lib/axios.ts';
import { IGetDailyRevenueInPeriodResponse } from '@/types/IGetDailyRevenueInPeriodResponse.ts';
import { IDailyRevenueInPeriodQuery } from '@/api/get-daily-revenue-in-period/interfaces.ts';

async function getDailyRevenueInPeriod({
  from,
  to,
}: IDailyRevenueInPeriodQuery) {
  const response = await api.get<IGetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
}

export default getDailyRevenueInPeriod;
