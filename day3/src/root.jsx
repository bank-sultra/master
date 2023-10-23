import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from './screens/explore';
import History from './screens/history';
import MainRouter from './features/main/router';
import {navigationRef} from './helpers/function/navigate';

const Stack = createStackNavigator();

export default function Root() {
  const {accessToken} = state => state.auth.accessToken;

  if (accessToken) {
    return (
      <Stack.Navigator initialRouteName="explore">
        <Stack.Screen
          component={MainRouter}
          name="main"
          options={{headerShown: false}}
        />
        <Stack.Screen component={History} name="history" />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen component={Explore} name="auth" />
    </Stack.Navigator>
  );
}
