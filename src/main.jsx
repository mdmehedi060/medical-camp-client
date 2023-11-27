import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProviders';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
QueryClient,
QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-xl mx-auto mt-6">
      <RouterProvider router={router} />
      </div>
      </QueryClientProvider>
   
    </AuthProvider>
  </React.StrictMode>,
)
