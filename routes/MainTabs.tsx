import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../components/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DiscoverStackScreen, HomeStackScreen, SettingsStackScreen } from './AppStacks';
import HomeIcon from 'react-native-vector-icons/Foundation';
import DiscoverIcon from 'react-native-vector-icons/MaterialIcons';
import SettingsIcon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function MainTabs():React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.neutral8,
        tabBarLabelStyle: {
          fontSize: 12,
          letterSpacing: 0.5,
          fontFamily: 'SpaceGrotesk-Bold',
        }
      }}>
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" color={color} size={24} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'Dashboard') return;
            return {display: 'none'};
          })(route),
        })}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <DiscoverIcon name="shopping-bag" color={color} size={24} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'Discover') return;
            return {display: 'none'};
          })(route),
        })}
        name="Discover"
        component={DiscoverStackScreen}
      />
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <SettingsIcon name="settings" color={color} size={24} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'Settings') return;
            return {display: 'none'};
          })(route),
        })}
        name="Settings"
        component={SettingsStackScreen}
      />
    </Tab.Navigator>
  );
}