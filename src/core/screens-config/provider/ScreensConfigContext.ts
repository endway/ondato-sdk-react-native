import { createContext } from 'react';

export interface ScreensConfigContextValue {
  onSuccess: () => void;
  onError: () => void;
  onClose: () => void;
}

const ScreensConfigContext = createContext<ScreensConfigContextValue>({
  onError: () => {},
  onSuccess: () => {},
  onClose: () => {},
});

export default ScreensConfigContext;
