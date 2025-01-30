import { api } from '@/lib/axios.ts';
import {
  IGetOrdersQuery,
  IGetOrdersResponse,
} from '@/api/get-orders/interfaces.ts';

async function getOrders({ pageIndex }: IGetOrdersQuery) {
  const response = await api.get<IGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  });

  return response.data;
}

export default getOrders;
