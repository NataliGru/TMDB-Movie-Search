import { type RefObject, useEffect } from 'react';

type UseClickOutsideParams<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  enabled?: boolean;
  onClickOutside: () => void;
};

export const useClickOutside = <T extends HTMLElement>({
  ref,
  enabled = true,
  onClickOutside,
}: UseClickOutsideParams<T>) => {
  useEffect(() => {
    if (!enabled) return;

    const handleDocumentMouseDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleDocumentMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
    };
  }, [ref, enabled, onClickOutside]);
};
