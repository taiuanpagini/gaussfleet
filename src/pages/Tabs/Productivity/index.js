import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Productivity from '~/pages/Productivity';

const Stack = createStackNavigator();

export default function ProductivityTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Productivity"
        component={Productivity}
        options={{
          title: 'Produtividade',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
