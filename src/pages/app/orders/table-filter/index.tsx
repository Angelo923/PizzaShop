import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Search, X } from 'lucide-react';
import {
  orderFiltersSchema,
  OrderFiltersSchema,
} from '@/pages/app/orders/table-filter/schema.ts';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'react-router-dom';

function OrderTableFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const { register, handleSubmit, control, reset } =
    useForm<OrderFiltersSchema>({
      resolver: zodResolver(orderFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    });

  function handleFilter({ orderId, customerName, status }: OrderFiltersSchema) {
    const filters = { orderId, customerName, status };

    setSearchParams(state => {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          state.set(key, value);
        } else {
          state.delete(key);
        }
        state.set('page', '1');
      });

      return state;
    });
  }

  function hadleClearFilters() {
    setSearchParams(state => {
      state.delete('orderId');
      state.delete('customerName');
      state.delete('status');
      state.set('page', '1');

      return state;
    });

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button
        onClick={hadleClearFilters}
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="h-4 w-4 mr-2" />
        Remover filtros
      </Button>
    </form>
  );
}

export default OrderTableFilter;
