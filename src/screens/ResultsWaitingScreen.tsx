import React, { FC, useCallback, useEffect } from 'react';
import { Container, LottieAnimation, PrimaryText, ScreenContainer } from '../components';
import { center, flex1, rowEnd } from '../theme/common';
import { StyleSheet, View } from 'react-native';
import { errorRoute, ResultsWaitingScreenProps, successRoute } from '../navigation/types';
import { useTheme } from '../theme/hooks';
import { useLogging, useResultsWaiting } from '../hooks';
import { LogActions } from '../api/clients/identity/constants';
import { RejectionReasons } from '../api/clients/kyc/constants';
import { reset } from '../navigation/actions';
const encryptionAnimation = require('../assets/animations/encryption.json');

const ResultsWaitingScreen: FC<ResultsWaitingScreenProps> = (props) => {
  const { navigation } = props;

  const { log } = useLogging();
  const theme = useTheme();

  const handleOnError = useCallback(
    (rejectionReason: RejectionReasons) => {
      navigation.dispatch(reset(errorRoute, { rejectionReason }));
    },
    [navigation]
  );

  const handleOnSuccess = useCallback(() => {
    navigation.dispatch(reset(successRoute));
  }, [navigation]);

  useResultsWaiting({ onError: handleOnError, onSuccess: handleOnSuccess });

  useEffect(() => {
    log(LogActions.waitingPage);
  }, [log]);

  return (
    <ScreenContainer>
      <Container style={[flex1, center]}>
        <View style={[rowEnd, theme.margins.bottom.m]}>
          <PrimaryText fontWeight="bold" fontSize="xxxl">
            2
          </PrimaryText>
          <PrimaryText style={styles.percents} fontWeight="bold" fontSize="xxl">
            %
          </PrimaryText>
        </View>
        <PrimaryText fontWeight="bold" fontSize="m" center style={theme.margins.bottom.xxl}>
          We encrypt your data and send for verification.
        </PrimaryText>
        <LottieAnimation style={styles.animation} autoPlay loop source={encryptionAnimation} />
      </Container>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  percents: {
    paddingBottom: 8,
  },
  animation: {
    height: 300,
  },
});

export default ResultsWaitingScreen;
