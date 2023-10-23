import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contactus from './contactUs';
import Favorite from './favorite';
import Message from './message';
import Profile from './profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';

const BottomTab = createBottomTabNavigator();

export default function MainRouter() {
  const renderIcon = (name, focused) => {
    return (
      <AntDesign name={name} size={20} color={focused ? 'orange' : 'gray'} />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="profile"
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <BottomTab.Screen
        component={Favorite}
        name="favorite"
        options={{
          tabBarIcon: ({focused}) => renderIcon('staro', focused),
        }}
      />
      <BottomTab.Screen
        component={Message}
        name="message"
        options={{
          tabBarIcon: ({focused}) => renderIcon('message1', focused),
        }}
      />
      <BottomTab.Screen
        component={Contactus}
        name="contact-us"
        options={{
          tabBarIcon: ({focused}) => renderIcon('idcard', focused),
        }}
      />
      <BottomTab.Screen
        component={Profile}
        name="profile"
        options={{
          tabBarIcon: ({focused}) => renderIcon('user', focused),
        }}
      />
    </BottomTab.Navigator>
  );
}
