import type { ReactNode } from 'react';

import { ReactQueryProvider } from './reactQueryProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);
