import React, { FC, useMemo } from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from '@ondato/core/query';
import { Provider } from 'react-redux';
import { persistor, store } from '@ondato/core/store';
import { Splash, StatusBar } from '@ondato/components';
import RootNavigator from '@ondato/navigation/RootNavigator';
import { ScreenConfigProvider } from '@ondato/core/screens-config/provider';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@ondato/theme/provider';
import { Callbacks, UserConfig } from '@ondato/modules/kyc/types';
import { ErrorBoundary } from '@ondato/core/error-boundary';
import { ConfigurableTheme } from '@ondato/theme/types';
import lightTheme from '@ondato/theme/lightTheme';
import { Locales } from './i18n/constants';
import { setupTranslations } from './i18n';

setupTranslations();

interface Props {
  identityVerificationId: string;
  onError: () => void;
  onClose: () => void;
  onSuccess: () => void;
  isConsentEnabled?: boolean;
  isOnboardingEnabled?: boolean;
  isLoggingEnabled?: boolean;
  locale?: Locales;
  theme?: ConfigurableTheme;
}

const App: FC<Props> = (props) => {
  const {
    identityVerificationId,
    locale = Locales.en,
    isLoggingEnabled,
    isConsentEnabled,
    isOnboardingEnabled,
    onError,
    onSuccess,
    onClose,
  } = props;

  const config = useMemo<UserConfig & Callbacks>(
    () => ({
      isConsentEnabled: isConsentEnabled ?? true,
      isOnboardingEnabled: isOnboardingEnabled ?? true,
      isLoggingEnabled: isLoggingEnabled ?? true,
      onError,
      onSuccess,
      onClose,
    }),
    [isConsentEnabled, isOnboardingEnabled, isLoggingEnabled, onError, onSuccess, onClose]
  );

  const configurableTheme = useMemo<ConfigurableTheme>(
    () => ({
      colors: {
        text: lightTheme.colors.text,
        background: lightTheme.colors.background,
        primary: lightTheme.colors.primary,
      },
    }),
    []
  );

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={<Splash />} persistor={persistor}>
            <ScreenConfigProvider locale={locale} identityVerificationId={identityVerificationId} {...config}>
              <ThemeProvider configurableTheme={configurableTheme}>
                <StatusBar />
                <RootNavigator />
              </ThemeProvider>
            </ScreenConfigProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
