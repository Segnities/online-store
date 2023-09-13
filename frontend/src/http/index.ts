import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const $defaultHost = axios.create({
   baseURL: process.env.api,
});

const $authHost = axios.create({
   baseURL: process.env.api,
});


const authInterceptor = (request: InternalAxiosRequestConfig) => {
   request.headers['Authorization']= `Bearer ${localStorage.getItem('token')}`;
   return request;
}

$authHost.interceptors.request.use(authInterceptor, (err)=> {
   return Promise.reject(err);
});


export { $authHost, $defaultHost };
