import { useContext } from 'react';
import ScreensConfigContext from '@ondato/core/screens-config/provider/ScreensConfigContext';

const useCallbacks = () => {
  const { onSuccess, onError, onClose } = useContext(ScreensConfigContext);

  return { onSuccess, onError, onClose };
};

export default useCallbacks;
