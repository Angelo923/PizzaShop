import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Building, ChevronDown, LogOut } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import getProfile from '@/api/profile/get-profile.ts';
import getManagedRestaurant from '@/api/managed-restaurant/get-managed-restaurant.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx';
import StoreProfileDialog from '@/components/store-profile-dialog';
import { signOut } from '@/api/sign-out.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AccountMenu() {
  const navigate = useNavigate();
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  });

  const { data: managedRestaurant, isLoading: isloandingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    });

  const { mutateAsync: signOutFn, isPending: isSigninOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true });
    },
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            {isloandingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground mt-2">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="w-4 h-4 mr-2" />
              <span>Perfil da Loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
            disabled={isSigninOut}
          >
            <button className="w-full" onClick={() => signOutFn()}>
              <LogOut className="w-4 h-4 mr-2" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  );
}

export default AccountMenu;
