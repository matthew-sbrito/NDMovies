import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function usePersistState<T>( key: string, initialState: any ): Response<T>{
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export { usePersistState };
