import React, { FC, PropsWithChildren, useCallback, useEffect, useMemo } from 'react';
import { Callbacks, UserConfig } from '@ondato/modules/kyc/types';
import i18n from 'i18next';
import { setIdentityVerificationId, setUserConfig } from '@ondato/modules/kyc/slice';
import { useAppDispatch } from '@ondato/core/store';
import { Locales } from '@ondato/i18n/constants';
import ScreensConfigContext, { ScreensConfigContextValue } from './ScreensConfigContext';

interface Props extends UserConfig, Callbacks {
  locale: Locales;
  identityVerificationId: string;
}

const ScreensConfigProvider: FC<PropsWithChildren<Props>> = (props) => {
  const { identityVerificationId, locale, children, onError, onSuccess, onClose, ...userConfig } = props;

  const dispatch = useAppDispatch();

  const init = useCallback(async () => {
    await i18n.changeLanguage(locale);
    dispatch(setIdentityVerificationId({ identityVerificationId }));
    dispatch(setUserConfig({ userConfig }));
  }, [locale, identityVerificationId, userConfig, dispatch]);

  const handleOnClose = useCallback(async () => {
    // TODO: stop screen recording
    onClose();
  }, [onClose]);

  useEffect(() => {
    init();
  }, [init]);

  const memoizedValue = useMemo<ScreensConfigContextValue>(
    () => ({ onError, onSuccess, onClose: handleOnClose }),
    [onError, onSuccess, handleOnClose]
  );

  return <ScreensConfigContext.Provider value={memoizedValue}>{children}</ScreensConfigContext.Provider>;
};

export default ScreensConfigProvider;
