import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Security from '~/pages/Security';

const Stack = createStackNavigator();

export default function SecurityTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          title: 'Segurança',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
