import React, { FC } from 'react';
import { Button, Container, ScreenContainer, ScreenHeader, Svg } from '@ondato/components';
import { center, flex1, row, spaceBetween } from '@ondato/theme/common';
import { QuitConfirmationScreenProps } from '@ondato/navigation/types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@ondato/theme/hooks';
import { useCallbacks } from '@ondato/core/screens-config/hooks';

const QuitConfirmationScreen: FC<QuitConfirmationScreenProps> = (props) => {
  const { navigation } = props;

  const theme = useTheme();
  const { t } = useTranslation();
  const { onError } = useCallbacks();

  return (
    <ScreenContainer style={[theme.paddings.top.xxl, theme.paddings.bottom.l]}>
      <ScreenHeader title={t('quit_confirmation.title')} description={t('quit_confirmation.description')} />
      <Container style={[flex1, center]}>
        <Svg color={theme.colors.primary} name="quitConfirmation" />
      </Container>
      <Container style={[row, spaceBetween, theme.paddings.top.l]}>
        <Button onPress={onError} variant="secondary" label={t('buttons.quit')} />
        <Button onPress={navigation.goBack} label={t('buttons.continue')} />
      </Container>
    </ScreenContainer>
  );
};

export default QuitConfirmationScreen;
