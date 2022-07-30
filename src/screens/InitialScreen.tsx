import React, { FC, useCallback, useEffect } from 'react';
import { InitialScreenProps } from '../navigation/types';
import { ScreenContainer, Splash } from '../components';
import { useAppSelector } from '../core/store';
import { useInit } from '../hooks';
import { selectIdentityVerificationId, selectInitialRouteName } from '../modules/kyc/selectors';
import { selectFullAccessToken } from '../modules/sessions/selectors';
import { reset } from '../navigation/actions';

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
