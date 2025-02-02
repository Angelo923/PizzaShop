import { api } from '@/lib/axios.ts';
import { IDeliverOrder } from '@/api/deliver-order/interfaces.ts';

async function deliverOrder({ orderId }: IDeliverOrder) {
  await api.patch(`/orders/${orderId}/deliver`);
}

export default deliverOrder;
