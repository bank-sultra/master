import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './button.style';

export default function Button() {
  return (
    <TouchableOpacity style={buttonStyle.container}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
