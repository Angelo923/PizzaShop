import { api } from '@/lib/axios.ts';
import {
  IGetOrderDetails,
  IGetOrderDetailsResponse,
} from '@/api/get-order-details/interfaces.ts';

async function getOrderDetails({ orderId }: IGetOrderDetails) {
  const response = await api.get<IGetOrderDetailsResponse>(
    `/orders/${orderId}`,
  );

  return response.data;
}

export default getOrderDetails;
