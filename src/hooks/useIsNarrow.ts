import { useState, useEffect } from 'react';

export const useIsNarrow = (): boolean => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 900px)');
    setIsNarrow(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isNarrow;
};
