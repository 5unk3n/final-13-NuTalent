import axios from 'axios';

import tokenStorage from '@/util/tokenStorage';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();

  if (config.url === '/image/uploadfile') {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default instance;
