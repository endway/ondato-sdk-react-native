import { useAppSelector } from '@ondato/core/store';
import { selectKycId } from '@ondato/modules/kyc/selectors';
import { KycClient } from '@ondato/api/clients';
import { useMutation } from 'react-query';

const useRetryIdentification = () => {
  const kycId = useAppSelector(selectKycId);

  const mutationFn = async () => {
    if (!kycId) throw new Error('KycIdentification id is not found');
    await KycClient.retry(kycId);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return { retry: mutateAsync, isLoading };
};

export default useRetryIdentification;
