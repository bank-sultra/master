import React from 'react';
import {SafeAreaView} from 'react-native';
import Signin from './src/components/moleculs/signIn';
import {Slider, NativeBaseProvider, Select} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Slider
          width={'3/4'}
          maxW="300"
          defaultValue={70}
          minValue={0}
          maxValue={100}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default App;
