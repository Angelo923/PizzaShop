import { api } from '@/lib/axios.ts';
import {
  IGetOrdersQuery,
  IGetOrdersResponse,
} from '@/api/get-orders/interfaces.ts';

async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: IGetOrdersQuery) {
  const response = await api.get<IGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  });

  return response.data;
}

export default getOrders;
