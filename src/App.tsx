import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes.tsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
