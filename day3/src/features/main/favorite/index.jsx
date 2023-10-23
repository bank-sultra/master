import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Favorite({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('history')}>
      <Text>Favorite</Text>
    </TouchableOpacity>
  );
}
