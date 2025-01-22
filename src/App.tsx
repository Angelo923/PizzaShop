import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes.tsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme/theme-provider.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="pizza.shop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
