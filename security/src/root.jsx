import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAccessToken} from './features/auth/slice';
import {bodyGenerator} from './helpers/bodyGenerator';

export default function Root() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state => state.auth);

  const getUsers = async () => {
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: bodyGenerator({name: 'audy'}),
      });
      const data = await req.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bodyGenerator({name: 'audy'});
    getUsers();
  }, []);
  return (
    <View>
      <Text>Root</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(setAccessToken('jaksjdksajdksajl'));
        }}>
        <Text>setToken {accessToken}</Text>
      </TouchableOpacity>
    </View>
  );
}
