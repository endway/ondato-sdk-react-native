import httpClient from '@ondato/api/httpClient';
import { ConsentRequest, CustomerAudits, GetSetupResponse, LoggingRequest } from './types';

const baseUrl = '/identity-verifications';

export const getSetup = (id: string) => {
  return httpClient.get<void, GetSetupResponse>(`${baseUrl}/${id}/setup`);
};

export const setCustomerAudits = (id: string, customerAudits: CustomerAudits) => {
  return httpClient.put<CustomerAudits>(`${baseUrl}/${id}/customer-audits`, customerAudits);
};

export const log = (id: string, request: LoggingRequest) => {
  return httpClient.post<LoggingRequest>(`${baseUrl}/${id}/activity-logs`, request);
};

export const consent = (id: string, request: ConsentRequest) => {
  return httpClient.put<ConsentRequest>(`${baseUrl}/${id}/consent`, request);
};
