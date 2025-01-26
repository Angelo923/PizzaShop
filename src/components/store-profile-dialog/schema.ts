import { z } from 'zod';

export const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().max(200),
});

export type StoreProfileSchema = z.infer<typeof storeProfileSchema>;
