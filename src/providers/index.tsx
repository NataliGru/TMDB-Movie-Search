import type { ReactNode } from 'react';

import { SearchMovieProvider } from '@/features/movies/search/searchContext/provider';

import { ReactQueryProvider } from './reactQueryProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ReactQueryProvider>
    <SearchMovieProvider>{children}</SearchMovieProvider>
  </ReactQueryProvider>
);
