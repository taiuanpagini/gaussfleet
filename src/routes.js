import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import HomeTab from './pages/Tabs/Home';
import MaintenanceTab from './pages/Tabs/Maintenance';
import SecurityTab from './pages/Tabs/Security';
import FuelTab from './pages/Tabs/Fuel';
import ProductivityTab from './pages/Tabs/Productivity';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackTitleVisible: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#FF5B57',
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Produtividade"
            component={ProductivityTab}
            options={{
              tabBarLabel: 'Produtividade',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="bar-chart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Combustível"
            component={FuelTab}
            options={{
              tabBarLabel: 'Combustível',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="local-gas-station"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Segurança"
            component={SecurityTab}
            options={{
              tabBarLabel: 'Segurança',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="https" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Manutenção"
            component={MaintenanceTab}
            options={{
              tabBarLabel: 'Manutenção',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
