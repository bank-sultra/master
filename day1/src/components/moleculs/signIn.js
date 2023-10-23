import {View, Text} from 'react-native';
import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

export default function SignIn(placeholder) {
  return (
    <View>
      <Input placeholder={'username'} />
      <Input placeholder={'password'} />
      <Button />
    </View>
  );
}
