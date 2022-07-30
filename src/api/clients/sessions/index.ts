import httpClient from '../../httpClient';
import { GetAccessTokenRequest, GetAccessTokenResponse } from './types';

const baseUrl = '/sessions';

export const getAccessToken = (request: GetAccessTokenRequest) => {
  return httpClient.post<GetAccessTokenRequest, GetAccessTokenResponse>(baseUrl, request);
};

export const getFullAccessToken = (id: string) => {
  return httpClient.post<void, GetAccessTokenResponse>(`${baseUrl}/${id}/full-access-token`);
};
