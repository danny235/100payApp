/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from './screens';
import { SafeAreaProvider } from "react-native-safe-area-context";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator()


function NavigationContent(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  )
}



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(()=> {
    if(Platform.OS === "android") SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer
            
          >
            <SafeAreaProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContent />
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
