import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddRezervation, RezervationMap} from '../screens';
import RezervationStack from './rezervation-stack';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="RezervationsStack"
        component={RezervationStack}
        options={{
          tabBarLabel: 'Rezervasyonlar',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddRezervation"
        component={AddRezervation}
        options={{
          tabBarLabel: 'Rezervasyon Ekle',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RezervationMap"
        component={RezervationMap}
        options={{
          tabBarLabel: 'Rezervasyon Haritası',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="map-marked-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
