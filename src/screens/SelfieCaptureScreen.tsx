import React, { FC } from 'react';
import { SelfieCaptureScreenProps } from '@ondato/navigation/types';
import { FlowScreenContainer } from '@ondato/components';
import { flex1 } from '@ondato/theme/common';
import { useTheme } from '@ondato/theme/hooks';
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
