import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {
  consentRoute,
  documentCaptureRoute,
  documentPrepareRoute,
  documentPreviewRoute,
  documentSelectRoute,
  errorRoute,
  initialRoute,
  languagesRoute,
  loadingRoute,
  onboardingRoute,
  quitConfirmationRoute,
  registrationSuccessRoute,
  resultsWaitingRoute,
  selfieCaptureRoute,
  successRoute,
} from '@ondato/navigation/types';
import {
  ConsentScreen,
  DocumentCaptureScreen,
  DocumentPrepareScreen,
  DocumentPreviewScreen,
  DocumentSelectScreen,
  ErrorScreen,
  InitialScreen,
  LanguagesScreen,
  LoadingScreen,
  OnboardingScreen,
  QuitConfirmationScreen,
  RegistrationSuccessScreen,
  ResultsWaitingScreen,
  SelfieCaptureScreen,
  SuccessScreen,
} from '@ondato/screens';
import { PhotoFile } from 'react-native-vision-camera';
import { DocumentVariant } from '@ondato/modules/kyc/types';
import { RejectionReasons } from '@ondato/api/clients/kyc/constants';

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export type RootStackParamList = {
  [initialRoute]: undefined;
  [onboardingRoute]: undefined;
  [languagesRoute]: undefined;
  [consentRoute]: undefined;
  [documentSelectRoute]: undefined;
  [documentPrepareRoute]: { variant: DocumentVariant };
  [documentCaptureRoute]: { variant: DocumentVariant };
  [selfieCaptureRoute]: undefined;
  [documentPreviewRoute]: { variant: DocumentVariant; photo: PhotoFile };
  [quitConfirmationRoute]: undefined;
  [loadingRoute]: undefined;
  [resultsWaitingRoute]: undefined;
  [successRoute]: undefined;
  [errorRoute]: { rejectionReason: RejectionReasons };
  [registrationSuccessRoute]: undefined;
};

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={initialRoute} screenOptions={screenOptions}>
        <RootStack.Group>
          <RootStack.Screen name={initialRoute} component={InitialScreen} />
          <RootStack.Screen name={onboardingRoute} component={OnboardingScreen} />
          <RootStack.Screen name={consentRoute} component={ConsentScreen} />
          <RootStack.Screen name={documentSelectRoute} component={DocumentSelectScreen} />
          <RootStack.Screen name={documentPrepareRoute} component={DocumentPrepareScreen} />
          <RootStack.Screen name={documentCaptureRoute} component={DocumentCaptureScreen} />
          <RootStack.Screen name={selfieCaptureRoute} component={SelfieCaptureScreen} />
          <RootStack.Screen name={documentPreviewRoute} component={DocumentPreviewScreen} />
          <RootStack.Screen name={loadingRoute} component={LoadingScreen} />
          <RootStack.Screen name={resultsWaitingRoute} component={ResultsWaitingScreen} />
          <RootStack.Screen name={errorRoute} component={ErrorScreen} />
          <RootStack.Screen name={successRoute} component={SuccessScreen} />
          <RootStack.Screen name={registrationSuccessRoute} component={RegistrationSuccessScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name={languagesRoute} component={LanguagesScreen} />
          <RootStack.Screen name={quitConfirmationRoute} component={QuitConfirmationScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
