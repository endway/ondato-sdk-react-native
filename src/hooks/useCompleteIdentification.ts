import { useAppSelector } from '@ondato/core/store';
import { selectKycId } from '@ondato/modules/kyc/selectors';
import { KycClient } from '@ondato/api/clients';
import { useMutation } from 'react-query';

const useCompleteIdentification = () => {
  const kycId = useAppSelector(selectKycId);

  const mutationFn = async () => {
    if (!kycId) throw new Error('KycIdentification id is not found');
    await KycClient.verify(kycId);
    await KycClient.complete(kycId);
    return await KycClient.getStatus(kycId);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return { complete: mutateAsync, isLoading };
};

export default useCompleteIdentification;
