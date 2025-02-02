import { api } from '@/lib/axios.ts';
import { IDispatchOrder } from '@/api/dispatch-order/interfaces.ts';

async function dispatchOrder({ orderId }: IDispatchOrder) {
  await api.patch(`/orders/${orderId}/dispatch`);
}

export default dispatchOrder;
