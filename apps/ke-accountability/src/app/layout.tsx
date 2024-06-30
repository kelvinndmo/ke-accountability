'use client';

import axios from 'axios';
import './global.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

axios.interceptors.request.use((config) => {
  config.headers['Accept'] = ['application/json'];
  if (typeof window !== 'undefined') {
    // remove trailing /api
    config.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const token = process.env.NEXT_PUBLIC_PROD_GUID;
    if (token) {
      config.headers['Authorization'] = token;
    }
  }
  return config;
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
