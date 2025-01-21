import { z } from 'zod';

export const signInForm = z.object({
  email: z.string().email(),
});

export type ISigninForm = z.infer<typeof signInForm>;

export const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
});

export type ISignUpForm = z.infer<typeof signUpForm>;
