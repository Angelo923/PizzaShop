import { api } from '@/lib/axios.ts';
import { IUpdateProfile } from '@/api/update-profile/interfaces.ts';

async function updateProfile({ name, description }: IUpdateProfile) {
  await api.put('/profile', { name, description });
}

export default updateProfile;
