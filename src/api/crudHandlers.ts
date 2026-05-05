import type { AxiosRequestConfig } from 'axios';

import { httpClient } from './httpClient';

export async function getData<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.get<T>(url, config);
  return response.data;
}

export async function postData<T, Body = unknown>(
  url: string,
  data?: Body,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.post<T>(url, data, config);
  return response.data;
}

export async function putData<T, Body = unknown>(
  url: string,
  data?: Body,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.put<T>(url, data, config);
  return response.data;
}

export async function patchData<T, Body = unknown>(
  url: string,
  data?: Body,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.patch<T>(url, data, config);
  return response.data;
}

export async function deleteData<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await httpClient.delete<T>(url, config);
  return response.data;
}
