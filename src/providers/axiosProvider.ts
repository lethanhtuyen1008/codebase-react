import Axios, { AxiosInstance } from 'axios';
import { CookieKey } from '../commons/cookieKey';
import { RequestHeaderKey } from '../commons/headerKeys';
import { cookieProvider } from './cookieProvider';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

export function initApiClient(baseURL: string): AxiosInstance {
  const axiosInstance = Axios.create({
    baseURL,
    timeout: 60 * 1000,
    headers: {
      'Content-Type': 'application/json',
      Pragma: 'no-cache',
    },
    paramsSerializer: (params) => {
      const request = omitBy(params, isNil);
      return Object.entries(request)
        .map(([key, value]) => {
          if (value instanceof Date) {
            const date = new Date(value).toISOString();
            return `${key}=${date}`;
          } else {
            return `${key}=${value}`;
          }
        })
        .join('&');
    },
    transformRequest: (data, headers: any) => {
      const accessToken = cookieProvider.get(CookieKey.ACCESS_TOKEN);

      if (accessToken) {
        headers[RequestHeaderKey.AUTHORIZATION] = `Bearer ${accessToken}`;
      }

      return JSON.stringify(data);
    },
  });

  axiosInstance.interceptors.response.use(
    (response: any) => response.data,
    async (error) => {
      return Promise.reject(error.response?.data || error);
    },
  );

  return axiosInstance;
}

export const apiClient = initApiClient(process.env.API_RESOURCE_SERVER || '');
