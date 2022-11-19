import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { LogBox  } from 'react-native';

import { Provider } from 'react-redux';
import { Store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({
    'Prompt-Regular': require('./assets/fonts/Prompt-Regular.ttf'),
    'Prompt-Bold': require('./assets/fonts/Prompt-Bold.ttf'),
  });  
  const loadFont = async() => {
    try {
      fontsLoaded
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    loadFont();
  }, []);
  LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead. https://docs.expo.dev/versions/latest/sdk/splash-screen/'])
  LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.'])

  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}