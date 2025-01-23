import { TableCell, TableRow } from '@/components/ui/table.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight, Search, X } from 'lucide-react';

function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do Pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        1io24y1h12o21j1gh
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Angelo Marcos Sirino Pedro</TableCell>
      <TableCell className="font-medium">149,98</TableCell>
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
