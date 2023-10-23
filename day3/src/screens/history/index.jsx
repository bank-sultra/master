import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function History({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('explore');
      }}>
      <Text>Back please</Text>
    </TouchableOpacity>
  );
}
