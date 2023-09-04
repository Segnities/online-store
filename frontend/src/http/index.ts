import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const $defaultHost = axios.create({
   baseURL: process.env.api,
});

const $authHost = axios.create({
   baseURL: process.env.api,
});


const authInterceptor = (config: InternalAxiosRequestConfig) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
   return config;
}

$authHost.interceptors.request.use(authInterceptor);


export { $authHost, $defaultHost };
