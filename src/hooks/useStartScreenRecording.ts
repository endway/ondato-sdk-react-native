import { ScreenRecordingUtils } from '@ondato/utils';
import { LogActions } from '@ondato/api/clients/identity/constants';
import { useCallback } from 'react';
import useLogging from './useLogging';

const useStartScreenRecording = () => {
  const { log } = useLogging();

  const startScreenRecording = useCallback(async () => {
    await ScreenRecordingUtils.startScreenRecording();
    log(LogActions.recordingStarted);
  }, [log]);

  return { startScreenRecording };
};

export default useStartScreenRecording;
