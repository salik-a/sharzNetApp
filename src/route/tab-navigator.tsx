import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Rezervations from '../screens/Rezervations';
import AddRezervation from '../screens/AddRezervation';
import RezervationMap from '../screens/RezervationMap';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Rezervations"
        component={Rezervations}
        options={{
          tabBarLabel: 'Rezervations',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddRezervation"
        component={AddRezervation}
        options={{
          tabBarLabel: 'AddRezervation',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RezervationMap"
        component={RezervationMap}
        options={{
          tabBarLabel: 'RezervationMap',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="map-marked-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
