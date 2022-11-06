import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { setPark, setPark2, setPark3, setPark4, setPark5, setPark6, setPark7, setPark8, setPark9, setPark10, setPark11, setPark12, setPark13, setPark14, setPark15, setPark16} from './redux/action';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HeadImage = require('./assets/images/HeaderHome.png');

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}