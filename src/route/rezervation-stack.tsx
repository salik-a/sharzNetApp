import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Rezervations, RezervationDetail} from '../screens';

const Stack = createNativeStackNavigator();

const Route: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Rezervations'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Rezervations" component={Rezervations} />
      <Stack.Screen name="RezervationDetail" component={RezervationDetail} />
    </Stack.Navigator>
  );
};

export default Route;
