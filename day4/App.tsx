import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import JailMonkey from 'jail-monkey';
import Poppins from './src/components/Poppins';

export default function App() {
  const [isDebugMode, setIsDebugMode] = useState(false);

  const handleIsDebugMode = async () => {
    const res = await JailMonkey.isDevelopmentSettingsMode();
    setIsDebugMode(res);
  };

  useEffect(() => {
    handleIsDebugMode();
  }, [isDebugMode]);

  return (
    <View>
      <Poppins size={40}>
        Hallo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        voluptates eaque ratione incidunt{' '}
        <Poppins size={40} type="BoldItalic">
          INI BOLD!
        </Poppins>{' '}
        tempora officia facilis autem ipsam quod reprehenderit. Repellat alias
        sed minima ad quia nemo esse odio vero!
      </Poppins>
    </View>
  );
}
