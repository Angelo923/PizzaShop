export interface IGetProfileResponse {
  name: string;
  id: string;
  email: string;
  phone: string | null;
  role: 'manager' | 'customer';
  createdAt: Date | null;
  updatedAt: Date | null;
}
