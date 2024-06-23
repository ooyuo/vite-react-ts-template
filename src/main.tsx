import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import { SpinnerProvider } from './context/spinner/SpinnerContext.tsx';
import GlobalSpinner from './components/spinner/GlobalSpinner.tsx';
import App from './routes/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RetryErrorBoundary from './components/error/RetryErrorBoundary.tsx';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <RetryErrorBoundary>
          <SpinnerProvider>
            <React.Suspense fallback={<GlobalSpinner />}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </React.Suspense>
          </SpinnerProvider>
        </RetryErrorBoundary>
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
