import {Text} from 'react-native';
import React from 'react';
import {useGetFontScale} from '../../helpers/hooks/getFontScale';

export default function Poppins({
  type = 'Regular',
  size = 12,
  children,
  style = {},
}) {
  const scale = useGetFontScale();

  return (
    <Text
      style={[{fontFamily: `Poppins-${type}`, fontSize: size * scale}, style]}>
      {children}
    </Text>
  );
}
