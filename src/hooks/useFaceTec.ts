import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '@ondato/core/store';
import Zoom from 'react-native-facetec-zoom';
import { selectDeviceKeyIdentifier } from '@ondato/modules/face-tec/selectors';
import { selectKycId } from '@ondato/modules/kyc/selectors';

const useFaceTec = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const kycId = useAppSelector(selectKycId);
  if (!kycId) throw new Error('KycIdentification id is not found');

  const deviceKeyIdentifier = useAppSelector(selectDeviceKeyIdentifier);

  const initialize = useCallback(async () => {
    if (isInitialized || !deviceKeyIdentifier) return;
    await Zoom.initialize({ licenseKey: deviceKeyIdentifier });
    setIsInitialized(true);
  }, [isInitialized, deviceKeyIdentifier]);

  const verify = useCallback(async () => {
    const response = await Zoom.verify(kycId);
    console.log('response', response);
  }, [kycId]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return { isInitialized, verify };
};

export default useFaceTec;
