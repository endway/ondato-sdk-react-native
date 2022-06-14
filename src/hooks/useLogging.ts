import { useAppSelector } from '@ondato/core/store';
import { selectIdentityVerificationId } from '@ondato/modules/kyc/selectors';
import { IdentityClient } from '@ondato/api/clients';
import { LogActions } from '@ondato/api/clients/identity/constants';
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
