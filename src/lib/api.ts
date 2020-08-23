// @ts-nocheck
import axios, { AxiosError, AxiosResponse } from 'axios';

const fallbackError: AxiosError = {
  code: '404',
  name: '',
  message:
    'Our service is currently unavailable. Please try again later.',
  isAxiosError: true,
  config: null,
  response: {
    status: 404,
    headers: null,
    config: null,
    data:
      'Our service is currently unavailable. Please try again later.',
    statusText:
      'Our service is currently unavailable. Please try again later.',
  },
  toJSON: () => null,
};

axios.defaults.headers = {
  ...axios.defaults.headers,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

class Api {
  static host = `https://api`;

  static setHeaders = (token: string) => {
    axios.defaults.headers = {
      ...axios.defaults.headers,
      'Authorization': 'Bearer ' + token
    }
  };

  static get<T>(route: string): Promise<T> {
    const url = `${Api.host}${route}`;
    return axios
      .get(url)
      .then(Api.parseResponse)
      .catch((error: AxiosError) => {
        throw Api.failureFallBack(error.response);
      });
  }

  static put<T>(
    route: string,
    payload?: RequestPayload<T>
  ): Promise<AxiosResponse<T>> {
    const url = `${Api.host}${route}`;
    return axios
      .put(url, payload)
      .then(Api.parseResponse)
      .catch((error: AxiosError) => {
        throw Api.failureFallBack(error.response);
      });
  }

  static post<T>(
    route: string,
    payload?: RequestPayload<T>
  ): Promise<T> {
    const url = `${Api.host}${route}`;
    return axios
      .post(url, payload)
      .then(Api.parseResponse)
      .catch((error: AxiosError) => {
        throw Api.failureFallBack(error.response);
      });
  }

  static postWithMultipart<T>(
    route: string,
    payload?: RequestPayload<T>
  ): Promise<T> {
    const url = `${Api.host}${route}`;
    return axios
      .post(url, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(Api.parseResponse)
      .catch((error: AxiosError) => {
        throw Api.failureFallBack(error.response);
      });
  }

  static delete<T>(route: string): Promise<AxiosResponse<T>> {
    const url = `${Api.host}${route}`;
    return axios
      .delete(url)
      .then(Api.parseResponse)
      .catch((error: AxiosError) => {
        throw Api.failureFallBack(error.response);
      });
  }

  static parseResponse(response: AxiosResponse) {
    return response.data
  }

  static failureFallBack(res: AxiosResponse) {
    return res?.data?.message || fallbackError.response.statusText;
  }
}

export default Api;
