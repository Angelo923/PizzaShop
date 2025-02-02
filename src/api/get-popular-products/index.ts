import { api } from '@/lib/axios.ts';
import { IgetPopularProductsResponse } from '@/types/IGetPopularProductsResponse.ts';

async function getPopularProducts() {
  const response = await api.get<IgetPopularProductsResponse>(
    '/metrics/popular-products',
  );

  return response.data;
}

export default getPopularProducts;
