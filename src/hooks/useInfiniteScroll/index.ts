import { type RefObject, useEffect } from 'react';

type UseInfiniteScrollParams = {
  rootRef?: RefObject<Element | null>;
  targetRef: RefObject<Element | null>;
  enabled?: boolean;
  isLoading?: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  threshold?: number;
};

export const useInfiniteScroll = ({
  rootRef,
  targetRef,
  enabled = true,
  isLoading = false,
  onLoadMore,
  rootMargin = '80px',
  threshold = 0,
}: UseInfiniteScrollParams) => {
  useEffect(() => {
    const root = rootRef?.current ?? null;
    const target = targetRef.current;

    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          onLoadMore();
        }
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [
    rootRef,
    targetRef,
    enabled,
    isLoading,
    onLoadMore,
    rootMargin,
    threshold,
  ]);
};
