import axios from 'axios';

import userStorage from '@/util/userStorage';

const BASE_URL = 'https://minimum-bonobo-5unk3n-c85df597.koyeb.app/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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
