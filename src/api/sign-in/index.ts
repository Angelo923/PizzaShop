import { api } from '@/lib/axios.ts';
import { ISignIn } from '@/api/sign-in/interfaces.ts';

export async function signIn({ email }: ISignIn) {
  await api.post('/authenticate', { email });
}
