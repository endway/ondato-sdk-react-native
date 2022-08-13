import axios from 'axios';
import { store } from '../core/store';
import promise from 'promise';

const API_URL = "https://app-idvsapi-snd-ond.azurewebsites.net/v1";

const httpClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json', Accept: '*/*' },
});

httpClient.interceptors.request.use(
  async (request) => {
    const { fullAccessToken, accessToken } = store.getState().sessions;
    request.headers = request.headers ?? {};

    if (fullAccessToken) request.headers.Authorization = `Bearer ${fullAccessToken}`;
    else if (accessToken) request.headers.Authorization = `Bearer ${accessToken}`;

    console.log('Http request', {
      url: request.url,
      data: request.data,
      headers: request.headers,
    });

    return request;
  },
  (error) => promise.reject(error)
);

httpClient.interceptors.response.use(
  async (response) => {
    console.log('Http response', {
      url: response.request.url,
      data: response.data,
      header: response.headers,
    });

    return response.data;
  },
  (error) => {
    console.log('Http error', JSON.stringify(error));
    return Promise.reject(error);
  }
);

export default httpClient;
