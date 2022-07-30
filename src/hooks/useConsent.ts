import { useAppSelector } from '../core/store';
import { IdentityClient } from '../api/clients';
import { useMutation } from 'react-query';
import { ConsentRequest } from '../api/clients/identity/types';
import { selectIdentityVerificationId } from '../modules/kyc/selectors';

const useConsent = () => {
  const identityVerificationId = useAppSelector(selectIdentityVerificationId);

  const mutationFn = async (request: ConsentRequest) => {
    if (!identityVerificationId) throw new Error('Identity verification id is not found');
    await IdentityClient.consent(identityVerificationId, request);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  const consent = async (request: ConsentRequest) => {
    await mutateAsync(request);
  };

  return { consent, isLoading };
};

export default useConsent;
