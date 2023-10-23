import {View, Text, Button} from 'react-native';
import React from 'react';
import {buttonStyle} from '../../globalStyle';

export default function Card({name, age}) {
  return (
    <View style={buttonStyle.container}>
      <Text>
        Ini card Component {name} berumur {age}
      </Text>
      <Button title="click me" style={{backgroundColor: 'red'}} />
    </View>
  );
}
