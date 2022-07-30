import React, { FC, useMemo } from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './core/query';
import { Provider } from 'react-redux';
import { persistor, store } from './core/store';
import { Splash, StatusBar } from './components';
import RootNavigator from './navigation/RootNavigator';
import { ScreenConfigProvider } from './core/screens-config/provider';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from './theme/provider';
import { Callbacks, UserConfig } from './modules/kyc/types';
import { ErrorBoundary } from './core/error-boundary';
import { ConfigurableTheme } from './theme/types';
import lightTheme from './theme/lightTheme';
import { Locales } from './i18n/constants';
import { setupTranslations } from './i18n';

setupTranslations();

export interface SdkProps {
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

const App: FC<SdkProps> = (props) => {
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
