import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({route, navigation}) {
  const name = route.params?.name;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('history');
        }}>
        <Text>Pindah ke History</Text>
      </TouchableOpacity>
      <Text>Home {name}</Text>
    </View>
  );
}
