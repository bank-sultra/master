import {useEffect, useState} from 'react';
import {getFontScale} from 'react-native-device-info';

export const useGetFontScale = () => {
  const [scale, setScale] = useState(1);

  const getScale = async () => {
    const waitForScale = await getFontScale();
    setScale(waitForScale);
  };

  useEffect(() => {
    getScale();
  }, [scale]);

  return scale;
};
