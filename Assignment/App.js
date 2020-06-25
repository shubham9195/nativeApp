import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Invoice from './src/screens/Invoice'
import Bills from './src/screens/Bills'
import Settings from './src/screens/Settings'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = "home"
          } else if (route.name === 'settings') {
            iconName = 'settings';
          } else if (route.name === 'bills') {
            iconName = 'assignment'
          } else if (route.name === 'invoice') {
            iconName = 'book'
          }
          return <MaterialIcons name={iconName} size={24} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#006aff',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="invoice" component={Invoice} />
      <Tabs.Screen name="bills" component={Bills} />
      <Tabs.Screen name="settings" component={Settings} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  