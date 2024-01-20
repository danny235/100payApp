import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DiscoverScreen,
  HomeScreen,
  OnboardingScreen,
  RootAuth,
  SettingsScreen,
} from '../screens';
import MainTabs from './MainTabs';

export type RootStackParamList = {
  Home: undefined;
  // Define other screens and their parameters here
};

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();

export function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Dashboard" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export function DiscoverStackScreen(): React.JSX.Element {
  return (
    <DiscoverStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
    </DiscoverStack.Navigator>
  );
}

export function SettingsStackScreen(): React.JSX.Element {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default function NavigationContent(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="RootAuth" component={RootAuth} />
      </Stack.Group>
      <Stack.Screen
        name="MainTabs"
        options={{headerShown: false}}
        component={MainTabs}
      />
    </Stack.Navigator>
  );
}
