import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          animationEnabled: false,
        }}
      >
        {!signed ? (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
