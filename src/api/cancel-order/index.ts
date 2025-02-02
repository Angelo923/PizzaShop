import { api } from '@/lib/axios.ts';
import { ICancelOrder } from '@/api/cancel-order/interfaces.ts';

async function cancelOrder({ orderId }: ICancelOrder) {
  await api.patch(`/orders/${orderId}/cancel`);
}

export default cancelOrder;
