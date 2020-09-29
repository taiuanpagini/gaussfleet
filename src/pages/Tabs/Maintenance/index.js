import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Maintenance from '~/pages/Maintenance';

const Stack = createStackNavigator();

export default function MaintenanceTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Maintenance"
        component={Maintenance}
        options={{
          title: 'Manutenção',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
