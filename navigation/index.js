import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Car from '../screens/Car';
import Motorcycle from '../screens/Motorcycle';
import Bicycle from '../screens/Bicycle';
import Book from '../screens/Book';
import Report from '../screens/Report';
import Tse_1 from '../screens/park/tse_2'
import Map from '../screens/Map'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Page = createNativeStackNavigator();
const Stack = createMaterialTopTabNavigator();

function PageStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      initialRouteName='Book'
      screenOptions={({ route, }) => ({
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'Car') {
            image = focused ? require('../assets/icon/CarUse.png') : require('../assets/icon/Car.png')
            return (
              <Image source={image} style={{width: 67, height: 83, alignSelf: 'center'}} />
            )
          }
          if (route.name == 'Motercycle') {
            image = focused ? require('../assets/icon/MotorcycleUse.png') : require('../assets/icon/Motorcycle.png')
            return (
              <Image source={image} style={{width: 67, height: 83, alignSelf: 'center'}} />
            )
          }
          if (route.name == 'Bicycle') {
            image = focused ? require('../assets/icon/BicycleUse.png') : require('../assets/icon/Bicycle.png')
            return (
              <Image source={image} style={{width: 67, height: 83, alignSelf: 'center'}} />
            )
          }
          if (route.name == 'Book') {
            image = focused ? require('../assets/icon/BookUse.png') : require('../assets/icon/Book.png')
            return (
              <Image source={image} style={{width: 67, height: 83, alignSelf: 'center'}} />
            )
          }
        },
        tabBarItemStyle: {height: 100, top: -30},
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
  )
}

function RootNavigator() {
  return (
    <Page.Navigator>
      <Page.Screen name="Root" component={PageStack} options={{ headerShown: false }} />
      <Page.Group screenOptions={{ presentation: 'modal' }}>
        <Page.Screen  name="TSE_1" component={Tse_1} options={{ headerShown: false, title: "ลานจอดรถคณะวิศวะ 1"}} />
        <Page.Screen  name="Map" component={Map} options={{ headerShown: true, title: "MAP"}} />
        <Page.Screen name="Report" component={Report} options={{title: "Report"}} />
      </Page.Group>
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

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'grey'
  },
  tabBar: {
    height: 20
  }
})