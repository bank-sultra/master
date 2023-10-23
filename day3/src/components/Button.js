import {Text} from 'react-native';
import React, {useContext} from 'react';
import {EploreContext} from '../screens/explore';
import {TouchableOpacity} from 'react-native';

export default function Button() {
  const {setName, name} = useContext(EploreContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setName('alfian');
      }}>
      <Text>Button {name}</Text>
    </TouchableOpacity>
  );
}
