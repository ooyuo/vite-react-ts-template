import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpinnerProvider } from './context/spinner/SpinnerContext.tsx';
import GlobalSpinner from './components/spinner/GlobalSpinner.tsx';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SpinnerProvider>
        <React.Suspense fallback={<GlobalSpinner />}>
          <App />
        </React.Suspense>
      </SpinnerProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
