import { RootState } from '../../core/store';
import { FaceTecLicense } from './types';

export const selectFaceTecLicense = (state: RootState): FaceTecLicense | null => {
  return state.faceTec.license;
};

export const selectDeviceKeyIdentifier = (state: RootState): string | null => {
  return state.faceTec.license?.key ?? null;
};
