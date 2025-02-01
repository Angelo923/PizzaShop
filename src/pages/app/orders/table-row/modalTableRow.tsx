import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Search } from 'lucide-react';
import OrderDetails from '@/pages/app/orders/order-details.tsx';

function ModalTableRow() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do Pedido</span>
        </Button>
      </DialogTrigger>
      <OrderDetails />
    </Dialog>
  );
}

export default ModalTableRow;
