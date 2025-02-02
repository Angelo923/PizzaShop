import { api } from '@/lib/axios.ts';
import { IApproveOrder } from '@/api/approve-order/interfaces.ts';

async function approveOrder({ orderId }: IApproveOrder) {
  await api.patch(`/orders/${orderId}/approve`);
}

export default approveOrder;
