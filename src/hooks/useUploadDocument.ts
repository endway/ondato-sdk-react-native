import { useAppSelector } from '@ondato/core/store';
import { selectKycId } from '@ondato/modules/kyc/selectors';
import { useMutation } from 'react-query';
import { KycClient } from '@ondato/api/clients';
import { UploadDocumentRequest } from '@ondato/api/clients/kyc/types';

const useUploadDocument = () => {
  const kycId = useAppSelector(selectKycId);

  const mutationFn = async (request: UploadDocumentRequest) => {
    if (!kycId) throw new Error('KycIdentification id is not found');
    await KycClient.uploadDocument(kycId, request);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return { uploadDocument: mutateAsync, isLoading };
};

export default useUploadDocument;
