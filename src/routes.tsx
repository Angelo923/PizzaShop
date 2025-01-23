import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@/pages/app/dashboard.tsx';
import SignIn from '@/pages/auth/sign-in.tsx';
import AppLayout from '@/layouts/app.tsx';
import AuthLayout from '@/layouts/auth.tsx';
import SignUp from '@/pages/auth/sign-out.tsx';
import Orders from '@/pages/app/orders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
]);
