import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/pages/Home';

const Stack = createStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Usuários',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
