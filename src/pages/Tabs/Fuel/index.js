import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Fuel from '~/pages/Fuel';

const Stack = createStackNavigator();

export default function FuelTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fuel"
        component={Fuel}
        options={{
          title: 'Combustível',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
