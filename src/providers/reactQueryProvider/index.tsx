import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { queryClient } from '@/api';

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
