import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPerson, setToken, getUser} from './features/auth/slice';
import {useMutation, useQuery} from 'react-query';

export default function Root() {
  const dispatch = useDispatch();
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isPreviousData,
    error,
    refetch,
    mutate: userMutation,
  } = useMutation('userdata', async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = request.json();
    dispatch(setPerson('audy'));
    return response;
  });
  console.log(data);

  const {accessToken} = useSelector(state => state.auth);

  return (
    <View>
      <Text>Root {accessToken}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(setToken({accessToken: 'ini ceritanya access token'}));
          dispatch(setPerson('audy'));
          dispatch(getUser());
          userMutation();
        }}>
        <Text>simpan token</Text>
      </TouchableOpacity>
    </View>
  );
}
