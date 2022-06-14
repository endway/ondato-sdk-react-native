import { useContext } from 'react';
import ScreensConfigContext from '../provider/ScreensConfigContext';

const useScreensConfig = () => useContext(ScreensConfigContext);

export default useScreensConfig;
