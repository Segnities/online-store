import { $authHost, $defaultHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email: string, password: string) => {
   const { data } = await $authHost.post('api/user/registration', {
      email,
      password,
      role: 'ADMIN'
   });
   return jwt_decode(data.jwt);
}

export const login = async (email: string, password: string) => {
   const { data } = await $authHost.post('api/user/login', {
      email,
      password,
   });
   return jwt_decode(data.jwt);
}

export const check = async () => {
   const response = await $defaultHost.post('api/user/auth')
}