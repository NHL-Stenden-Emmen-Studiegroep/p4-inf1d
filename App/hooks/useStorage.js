import React, {useState, useEffect, useCallback} from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export function useStorage(storeName) {
    let value, setValue;

    const {getItem, setItem} = useAsyncStorage(storeName);


    const readItemFromStorage = useCallback(async () => {
        const item = await getItem();
        value = item;
        console.log("Storage is called")
        return value;
    }, []);

    const writeItemToStorage = useCallback(async newValue => {
        await setItem(newValue);
        value = newValue;
    }, []);

    useEffect(() => {
        readItemFromStorage();
    }, [value])

    return [value, writeItemToStorage];
}
