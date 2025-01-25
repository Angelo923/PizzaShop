import { api } from '@/lib/axios.ts';
import { ISignIn } from '@/api/interfaces.ts';

export async function signIn({ email }: ISignIn) {
  await api.post('/authenticate', { email });
}
