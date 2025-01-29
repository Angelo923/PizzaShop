import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getManagedRestaurant from '@/api/managed-restaurant/get-managed-restaurant.ts';
import { useForm } from 'react-hook-form';
import {
  storeProfileSchema,
  StoreProfileSchema,
} from '@/components/store-profile-dialog/schema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import updateProfile from '@/api/update-profile/update-profile.ts';
import { toast } from 'sonner';
import { IGetManagedRestaurantResponse } from '@/api/managed-restaurant/interface.ts';

function StoreProfileDialog() {
  const queryClient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  });

  function updateManagedRestauntCache({
    name,
    description,
  }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<IGetManagedRestaurantResponse>([
      'managed-restaurant',
    ]);

    if (cached) {
      queryClient.setQueryData<IGetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        },
      );
    }

    return { cached };
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestauntCache({ name, description });

      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestauntCache(context.previousProfile);
      }
    },
  });

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success('Perfil atualizado com sucesso!');
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente!');
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default StoreProfileDialog;
