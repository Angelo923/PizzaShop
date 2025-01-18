import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@/pages/app/dashboard.tsx';
import SignIn from '@/pages/auth/sign-in.tsx';
import AppLayout from '@/layouts/app.tsx';
import AuthLayout from '@/layouts/auth.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
]);
