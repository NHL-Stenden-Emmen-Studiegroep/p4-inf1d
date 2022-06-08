import { useState, useCallback } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export function useStorage(storeName) {
  let [value, setValue] = useState();

  const { getItem, setItem } = useAsyncStorage(storeName);

  const readItemFromStorage = useCallback(async () => {
    setValue(await getItem());
    return await getItem();
  }, []);

  const writeItemToStorage = useCallback(async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  }, []);

  return [readItemFromStorage, writeItemToStorage];
}
