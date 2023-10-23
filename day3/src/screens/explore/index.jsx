import {View, Text} from 'react-native';
import React, {useState, createContext, useRef} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../../helpers/function/navigate';
import Card from '../../components/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const EploreContext = createContext('');

export default function Explore() {
  const [name, setName] = useState('audy');
  const buttonRef = useRef(null);

  const handleNavigateToHome = () => {
    navigate('main');
  };

  return (
    <EploreContext.Provider value={{name, setName, handleNavigateToHome}}>
      <View>
        <AntDesign name="rightcircleo" color="red" size={80} />
        <TouchableOpacity onPress={handleNavigateToHome}>
          {console.log(buttonRef, ' buttonRef')}
          <Text>Move to Home</Text>
        </TouchableOpacity>
        <Text>Explore</Text>
        <Card />
      </View>
    </EploreContext.Provider>
  );
}
