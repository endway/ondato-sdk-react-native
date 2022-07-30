import { useAppSelector } from '../core/store';
import { selectKycId } from '../modules/kyc/selectors';
import { useMutation } from 'react-query';
import { ScreenRecordingUtils } from '../utils';
import { LogActions } from '../api/clients/identity/constants';
import useLogging from './useLogging';

const useStopScreenRecording = () => {
  const kycId = useAppSelector(selectKycId);
  const { log } = useLogging();

  const mutationFn = async () => {
    if (!kycId) throw new Error('KycIdentification id is not found');
    await ScreenRecordingUtils.stopScreenRecording();
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  const stopScreenRecording = async () => {
    await mutateAsync();
    log(LogActions.recordingStopped);
  };

  return { stopScreenRecording, isLoading };
};

export default useStopScreenRecording;
