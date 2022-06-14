import { useAppSelector } from '@ondato/core/store';
import { selectKycId } from '@ondato/modules/kyc/selectors';
import { useMutation } from 'react-query';
import { KycClient } from '@ondato/api/clients';
import { UploadAdditionalDocumentRequest } from '@ondato/api/clients/kyc/types';

const useUploadAdditionalDocument = () => {
  const kycId = useAppSelector(selectKycId);

  const mutationFn = async (request: UploadAdditionalDocumentRequest) => {
    if (!kycId) throw new Error('KycIdentification id is not found');
    await KycClient.uploadAdditionalDocument(kycId, request);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return { uploadAdditionalDocument: mutateAsync, isLoading };
};

export default useUploadAdditionalDocument;
