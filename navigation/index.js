import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Pressable, Dimensions, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Car from '../screens/Car';
import Motorcycle from '../screens/Motorcycle';
import Bicycle from '../screens/Bicycle';
import Book from '../screens/Book';
import Report from '../screens/Report';
import Tse_1 from '../screens/park/tse_2';
import Map from '../screens/Map';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { isAndroid } from "@freakycoder/react-native-helpers";
import CustomTabHeader from '../screens/CustomTabHeader';
import { useSelector } from 'react-redux';

const Page = createStackNavigator();
const Stack = createMaterialTopTabNavigator();
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

function PageStack() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <CustomTabHeader />
      <Stack.Navigator 
        initialRouteName='Car'
        screenOptions={({ route, }) => ({
          tabBarIcon: ({ image, focused }) => {
            if (route.name == 'Car') {
              image = focused ? require('../assets/icon/CarUse.png') : require('../assets/icon/Car.png')
              return (
                <Image source={image} style={{width: 64.5, height: 80, alignSelf: 'center'}} />
              )
            }
            if (route.name == 'Motercycle') {
              image = focused ? require('../assets/icon/MotorcycleUse.png') : require('../assets/icon/Motorcycle.png')
              return (
                <Image source={image} style={{width: 64.5, height: 80, alignSelf: 'center'}} />
              )
            }
            if (route.name == 'Bicycle') {
              image = focused ? require('../assets/icon/BicycleUse.png') : require('../assets/icon/Bicycle.png')
              return (
                <Image source={image} style={{width: 64.5, height: 80, alignSelf: 'center'}} />
              )
            }
            if (route.name == 'Book') {
              image = focused ? require('../assets/icon/BookUse.png') : require('../assets/icon/Book.png')
              return (
                <Image source={image} style={{width: 64.5, height: 80, alignSelf: 'center'}} />
              )
            }
          },
          tabBarItemStyle: {height: 90, top: -30},
        })}
      >
        <Stack.Screen 
          name="Car" 
          component={Car}
          options={{
            headerShown: false,
            tabBarInactiveBackgroundColor: '#35383E',
            tabBarActiveBackgroundColor: '#35383E',
            tabBarActiveTintColor: '#343434',
            tabBarShowLabel: false
          }} 
        />
        <Stack.Screen 
          name="Motercycle" 
          component={Motorcycle}
          options={{
            headerShown: false,
            tabBarInactiveBackgroundColor: '#35383E',
            tabBarActiveBackgroundColor: '#35383E',
            tabBarActiveTintColor: '#343434',
            tabBarShowLabel: false
          }} 
        />
        <Stack.Screen 
          name="Bicycle" 
          component={Bicycle}
          options={{
            headerShown: false,
            tabBarInactiveBackgroundColor: '#35383E',
            tabBarActiveBackgroundColor: '#35383E',
            tabBarActiveTintColor: '#343434',
            tabBarShowLabel: false
          }} 
        />
        <Stack.Screen 
          name="Book" 
          component={Book}
          options={{
            headerShown: false,
            tabBarInactiveBackgroundColor: '#35383E',
            tabBarActiveBackgroundColor: '#35383E',
            tabBarActiveTintColor: '#343434',
            tabBarShowLabel: false
          }} 
        />
      </Stack.Navigator>
    </Fragment>
  )
}

function RootNavigator() {
  const { park } = useSelector(state => state.dbReducer);
  return (
    <Page.Navigator
    screenOptions={{
      gestureEnabled: true,
      ...(isAndroid && TransitionPresets.ModalPresentationIOS),
    }}
    >
      <Page.Screen name="Root" component={PageStack} options={{ headerShown: false }} />
      <Page.Group screenOptions={{ presentation: 'modal' }}>
        <Page.Screen  name="TSE_1" component={Tse_1} options={{ headerShown: false, title: park, headerTitleAlign: 'center'}} />
        <Page.Screen  name="Map" component={Map} options={{ headerShown: true, title: park, headerTitleAlign: 'center'}} />
        <Page.Screen name="Report" component={Report} options={{title: "Report", headerTitleAlign: 'center'}} />
        <Page.Screen name="Head" component={CustomTabHeader} options={{headerShadow: false}} />
      </Page.Group>
      {/* <Page.Screen  name="TSE_1" component={Tse_1} options={{ headerShown: false, title: "ลานจอดรถคณะวิศวะ 1"}} />
      <Page.Screen  name="Map" component={Map} options={{ headerShown: true, title: "MAP"}} />
      <Page.Screen name="Report" component={Report} options={{title: "Report"}} /> */}
    </Page.Navigator>
  );
}

export default function navigator() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}