import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes.tsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme/theme-provider.tsx';
import { queryClient } from '@/lib/react-query.ts';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="pizza.shop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
