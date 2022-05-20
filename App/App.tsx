import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import Play from './src/components/buttons/play';
import Reset from './src/components/buttons/reset';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <Play/>
        <Reset/>
        <StatusBar />
      </SafeAreaProvider>
    );
  // }
}
