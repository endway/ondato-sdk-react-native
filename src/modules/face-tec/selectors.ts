import { RootState } from '@ondato/core/store';
import { FaceTecLicense } from '@ondato/modules/face-tec/types';

export const selectFaceTecLicense = (state: RootState): FaceTecLicense | null => {
  return state.faceTec.license;
};

export const selectDeviceKeyIdentifier = (state: RootState): string | null => {
  return state.faceTec.license?.key ?? null;
};
