import React, { FC } from 'react';
import { SelfieCaptureScreenProps } from '@ondato/navigation/types';
import { Button, Container, FlowScreenContainer } from '@ondato/components';
import { center, flex1 } from '@ondato/theme/common';
import { useTheme } from '@ondato/theme/hooks';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useFaceTec } from '@ondato/hooks';

const SelfieCaptureScreen: FC<SelfieCaptureScreenProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { isInitialized, verify } = useFaceTec();

  return (
    <FlowScreenContainer style={theme.paddings.bottom.l}>
      <View style={flex1} />
      <Container style={[center, theme.paddings.top.l]}>
        <Button onPress={verify} disabled={!isInitialized} label={t('buttons.capture')} />
      </Container>
    </FlowScreenContainer>
  );
};

export default SelfieCaptureScreen;
