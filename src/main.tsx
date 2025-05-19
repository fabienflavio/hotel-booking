import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient,QueryClientProvider } from 'react-query';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';
import { DataProvider } from './context/DataContext.tsx';
import { Router } from './route/Router.tsx';
import { loadStripe } from '@stripe/stripe-js';
import { idClient} from './Secret/Secret.ts';
import { GoogleOAuthProvider } from '@react-oauth/google';
const queryClient = new QueryClient()

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIQUE);

const router = createBrowserRouter(Router);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <GoogleOAuthProvider clientId={idClient}>   
      <DataProvider>
        <Elements stripe={stripePromise}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider >
        </Elements>
      </DataProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
