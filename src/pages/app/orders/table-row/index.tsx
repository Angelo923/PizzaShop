import { TableCell, TableRow } from '@/components/ui/table.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight, X } from 'lucide-react';
import { IOrderTableRow } from '@/pages/app/orders/table-row/interfaces.ts';
import OrderStatus from '@/components/order-status';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ModalTableRow from '@/pages/app/orders/table-row/modalTableRow.tsx';

function OrderTableRow({ order }: IOrderTableRow) {
  return (
    <TableRow>
      <TableCell>
        <ModalTableRow />
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default OrderTableRow;
