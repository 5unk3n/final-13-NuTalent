import axios from 'axios';

import userStorage from '@/util/userStorage';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const user = userStorage.getUser();
  const token = user?.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default instance;
