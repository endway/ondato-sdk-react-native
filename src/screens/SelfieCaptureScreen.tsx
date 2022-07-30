import React, { FC } from 'react';
import { SelfieCaptureScreenProps } from '../navigation/types';
import { FlowScreenContainer } from '../components';
import { flex1 } from '../theme/common';
import { useTheme } from '../theme/hooks';
import { View } from 'react-native';

const SelfieCaptureScreen: FC<SelfieCaptureScreenProps> = () => {
  const theme = useTheme();

  return (
    <FlowScreenContainer style={theme.paddings.bottom.l}>
      <View style={flex1} />
    </FlowScreenContainer>
  );
};

export default SelfieCaptureScreen;
