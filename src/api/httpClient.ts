import axios from 'axios';

function createHttpClient() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
}

export const httpClient = createHttpClient();
