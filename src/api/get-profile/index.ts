import { api } from '@/lib/axios.ts';
import { IGetProfileResponse } from '@/api/get-profile/interfaces.ts';

async function getProfile() {
  const response = await api.get<IGetProfileResponse>('/me');

  return response.data;
}

export default getProfile;
