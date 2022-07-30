import React, { FC } from 'react';
import { center, flex1 } from '../theme/common';
import { View } from 'react-native';
import { useTheme } from '../theme/hooks';
import Svg from './Svg';

const Splash: FC = () => {
  const theme = useTheme();

  return (
    <View style={[flex1, center]}>
      <Svg color={theme.colors.primary} name="logo" height={104} />
    </View>
  );
};

export default Splash;
