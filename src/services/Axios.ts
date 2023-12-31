import axios from 'axios';
import Config from 'react-native-config';
import { storage } from 'utils';

const Axios = axios.create({
  baseURL: Config.BASE_URL,
});

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post.Accept = 'application/json';

Axios.interceptors.request.use(async (config: any) => {
  const token = storage.getString('user_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Axios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const statusCode = error.response ? error.response.status : null;
    const originalRequest = error.config;
    if (statusCode === 401 && !originalRequest._retry) {
      console.log(error.response);
    }
    // console.log(error.response);
    return Promise.reject(error.response);
  },
);

export default Axios;
