import { useAppSelector } from '../core/store';
import { selectIdentityVerificationId } from '../modules/kyc/selectors';
import { IdentityClient } from '../api/clients';
import { LogActions } from '../api/clients/identity/constants';
import { useCallback } from 'react';

const useLogging = () => {
  const identityVerificationId = useAppSelector(selectIdentityVerificationId);

  const log = useCallback(
    (action: LogActions) => {
      if (!identityVerificationId) throw new Error('Identity verification id is not found');
      IdentityClient.log(identityVerificationId, { action });
    },
    [identityVerificationId]
  );

  return { log };
};

export default useLogging;
