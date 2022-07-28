import httpClient from '@ondato/api/httpClient';
import { GetFaceTecLicenseResponse } from './types';

const baseUrl = '/face-tec';

export const getFaceTecLicense = () => {
  return httpClient.get<void, GetFaceTecLicenseResponse>(`${baseUrl}/mobile-license`);
};
