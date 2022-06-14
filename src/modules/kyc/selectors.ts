import { RootState } from '@ondato/core/store';
import { RootStackParamList } from '@ondato/navigation/RootNavigator';
import {
  consentRoute,
  documentPrepareRoute,
  documentSelectRoute,
  onboardingRoute,
} from '@ondato/navigation/types';
import { Document } from './types';

export const selectKycId = (state: RootState): string | null => {
  return state.kyc.kycId;
};

export const selectIdentityVerificationId = (state: RootState): string | null => {
  return state.kyc.identityVerificationId;
};

export const selectIsResultsWaitingEnabled = (state: RootState): boolean => {
  return state.kyc.config.isResultsWaitingEnabled;
};

export const selectDocuments = (state: RootState): Document[] => {
  return state.kyc.config.documents;
};

export const selectInitialRouteName = (state: RootState): keyof RootStackParamList => {
  const { isOnboardingEnabled } = state.kyc.config;
  if (isOnboardingEnabled) return onboardingRoute;
  return selectAfterOnboardingRouteName(state);
};

export const selectAfterOnboardingRouteName = (state: RootState): keyof RootStackParamList => {
  const { isConsentEnabled } = state.kyc.config;
  if (isConsentEnabled) return consentRoute;
  return selectAfterConsentRouteName(state);
};

export const selectAfterConsentRouteName = (state: RootState): keyof RootStackParamList => {
  const { documents } = state.kyc.config;
  if (documents.length > 1) return documentSelectRoute;
  return documentPrepareRoute;
};

export const selectIsSelfieWithDocumentEnabled = (state: RootState): boolean => {
  return state.kyc.config.isSelfieWithDocumentEnabled;
};

export const selectIsSelfieEnabled = (state: RootState): boolean => {
  return state.kyc.config.isSelfieEnabled;
};
