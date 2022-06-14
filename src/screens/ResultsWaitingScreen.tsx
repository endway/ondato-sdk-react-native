import React, { FC, useCallback, useEffect } from 'react';
import { Container, LottieAnimation, PrimaryText, ScreenContainer } from '@ondato/components';
import { center, flex1, rowEnd } from '@ondato/theme/common';
import { StyleSheet, View } from 'react-native';
import { errorRoute, ResultsWaitingScreenProps, successRoute } from '@ondato/navigation/types';
import { useTheme } from '@ondato/theme/hooks';
import { useLogging, useResultsWaiting } from '@ondato/hooks';
import { LogActions } from '@ondato/api/clients/identity/constants';
import { RejectionReasons } from '@ondato/api/clients/kyc/constants';
import { reset } from '@ondato/navigation/actions';
const encryptionAnimation = require('@ondato/assets/animations/encryption.json');

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
