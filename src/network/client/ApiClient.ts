import axios, { type RawAxiosRequestHeaders } from 'axios';
import statusHandler from '../statusHandler';
import { ContentTypes, BASE_URL } from './ApiClient.constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': ContentTypes.json,
    Accept: ContentTypes.json,
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    statusHandler(error);
    return Promise.reject(error);
  },
);

// Base function for GET requests
export const get = <ExpectedDataResponse = any>(route: string) => {
  return apiClient<ExpectedDataResponse>(`${BASE_URL}/${route}`);
};

// Base function for POST requests
export const post = async (
  route: string,
  {
    body,
    type,
  }: {
    body: any;
    type: keyof typeof ContentTypes;
  },
) => {
  let headers: RawAxiosRequestHeaders = {
    Accept: 'application/json',
  };

  if (type) {
    headers['Content-Type'] = ContentTypes[type];
  }
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${route}`,
    headers,
    data: body,
  });
};

export default { get, post };
