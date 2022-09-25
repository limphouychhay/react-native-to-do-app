import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomePage, DetailPage} from '../../pages/Page';

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
}
