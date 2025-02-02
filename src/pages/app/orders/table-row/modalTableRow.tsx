import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Search } from 'lucide-react';
import OrderDetails from '@/pages/app/orders/details';
import { IOrderTableRow } from '@/pages/app/orders/table-row/interfaces.ts';

function ModalTableRow({ order }: IOrderTableRow) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do Pedido</span>
        </Button>
      </DialogTrigger>
      <OrderDetails orderId={order.orderId} />
    </Dialog>
  );
}

export default ModalTableRow;
