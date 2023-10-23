import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useBiometriks} from './src/helpers/hooks/biometrics';

export default function App() {
  const {promptBio} = useBiometriks('audy', 'password');

  useEffect(() => {
    promptBio();
  }, [promptBio]);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
