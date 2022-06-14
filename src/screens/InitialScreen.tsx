import React, { FC, useCallback, useEffect } from 'react';
import { InitialScreenProps } from '@ondato/navigation/types';
import { ScreenContainer, Splash } from '@ondato/components';
import { useAppSelector } from '@ondato/core/store';
import { useInit } from '@ondato/hooks';
import { selectIdentityVerificationId, selectInitialRouteName } from '@ondato/modules/kyc/selectors';
import { selectFullAccessToken } from '@ondato/modules/sessions/selectors';
import { reset } from '@ondato/navigation/actions';

const InitialScreen: FC<InitialScreenProps> = (props) => {
  const { navigation } = props;

  const initialRouteName = useAppSelector(selectInitialRouteName);
  const identityVerificationId = useAppSelector(selectIdentityVerificationId);
  const fullAccessToken = useAppSelector(selectFullAccessToken);

  const { init } = useInit();

  const navigateToInitialRoute = useCallback(() => {
    navigation.dispatch(reset(initialRouteName));
  }, [navigation, initialRouteName]);

  const initialize = useCallback(async () => {
    if (!identityVerificationId) return;
    await init(identityVerificationId);
    navigateToInitialRoute();
  }, [init, identityVerificationId, navigateToInitialRoute]);

  useEffect(() => {
    if (fullAccessToken) return;
    initialize();
  }, [initialize, fullAccessToken]);

  return (
    <ScreenContainer>
      <Splash />
    </ScreenContainer>
  );
};

export default InitialScreen;
