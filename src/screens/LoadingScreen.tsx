import React, { FC, useCallback, useEffect } from 'react';
import { PrimaryText, ScreenContainer } from '../components';
import { center } from '../theme/common';
import { ActivityIndicator } from 'react-native';
import {
  errorRoute,
  LoadingScreenProps,
  registrationSuccessRoute,
  resultsWaitingRoute,
  successRoute,
} from '../navigation/types';
import { useCompleteIdentification } from '../hooks';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../core/store';
import { selectIsResultsWaitingEnabled } from '../modules/kyc/selectors';
import { useTheme } from '../theme/hooks';
import { reset } from '../navigation/actions';

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  const { navigation } = props;
  const isResultsWaitingEnabled = useAppSelector(selectIsResultsWaitingEnabled);

  const theme = useTheme();
  const { complete } = useCompleteIdentification();
  const { t } = useTranslation();

  const completeIdentification = useCallback(async () => {
    const { status, statusReason } = await complete();

    if (status === 'Rejected') {
      navigation.replace(errorRoute, { rejectionReason: statusReason });
      return;
    }

    if (status === 'Approved') {
      navigation.dispatch(reset(successRoute));
      return;
    }

    if (isResultsWaitingEnabled) {
      navigation.dispatch(reset(resultsWaitingRoute));
      return;
    }

    navigation.dispatch(reset(registrationSuccessRoute));
  }, [complete, navigation, isResultsWaitingEnabled]);

  useEffect(() => {
    completeIdentification();
  }, [completeIdentification]);

  return (
    <ScreenContainer style={center}>
      <ActivityIndicator size={72} color={theme.colors.primary} style={theme.margins.bottom.xxl} />
      <PrimaryText fontWeight="bold" fontSize="xl" center style={theme.margins.bottom.l}>
        {t('loading.title')}
      </PrimaryText>
      <PrimaryText fontSize="m" center>
        {t('loading.description')}
      </PrimaryText>
    </ScreenContainer>
  );
};

export default LoadingScreen;
