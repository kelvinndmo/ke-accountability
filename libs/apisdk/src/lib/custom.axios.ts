import axios, { AxiosRequestConfig } from 'axios';

export const SOCKET_BACKEND_AXIOS_INSTANCE = axios.create();

export const customSocketBackendClient = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const promise = SOCKET_BACKEND_AXIOS_INSTANCE({
    ...config,
    ...options,
    baseURL: process.env['NEXT_PUBLIC_BACKEND_API_URL'],
  }).then(({ data }) => data);
  return promise;
};
