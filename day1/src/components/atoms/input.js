import {TextInput} from 'react-native';
import React from 'react';
import {inputStyle} from './input.style';

export default function InputAtoms({placeholder, keyboardType}) {
  return (
    <TextInput
      placeholderTextColor={'white'}
      style={[inputStyle.container, inputStyle.text]}
      placeholder={placeholder}
    />
  );
}
