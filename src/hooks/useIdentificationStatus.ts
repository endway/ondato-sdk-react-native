import { useAppSelector } from '@ondato/core/store';
import { selectKycId } from '@ondato/modules/kyc/selectors';
import { KycClient } from '@ondato/api/clients';
import { useQuery } from 'react-query';

export const getQueryKey = (kycId: string) => {
  return ['kyc-status', kycId];
};

const useIdentificationStatus = () => {
  const kycId = useAppSelector(selectKycId);
  if (!kycId) throw new Error('KycIdentification id is not found');

  const getStatusFn = () => KycClient.getStatus(kycId);
  const { isLoading, data: status } = useQuery(getQueryKey(kycId), getStatusFn);

  return { status, isLoading };
};

export default useIdentificationStatus;
