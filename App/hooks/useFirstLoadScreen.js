import React, { useState, useEffect } from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';


export default async function useFirstLoadScreen() {
    const [isFirstLoad, setFirstLoad] = useState(false);
    const {getItem, setItem } = useAsyncStorage("@Load_QuickStart_Guide");

    async function getItemFromStorage() {
        const item = await getItem();

        if(item === "true") {
            console.log(`Item: ${item}`);
        }
        setFirstLoad(item);
    }

    async function setItemToStorage(newValue) {
        await setItem(newValue);
        setFirstLoad(newValue);
    }

    useEffect(() => {
        getItemFromStorage();
    }, []);



    return {isFirstLoad, getItemFromStorage, setItemToStorage};
}


//     try {
//       const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);

//       if (hasLaunched === 'false') {
//         setAppLaunched();
//         console.log("Hello");
//         return true;
//       }

//       console.log(`Hello Two ${hasLaunched}`);
//       return false;
//     } catch (error) {
//       console.log(error);
//       return false;
//     }

//     return [hasLaunched, isLoading];
//   }