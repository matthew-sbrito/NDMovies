import { useState, useEffect } from "react";

function usePersistState<T>( key: string, value: T ){
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export { usePersistState };
