import { $authHost, $defaultHost } from "./index";
import jwt_decode from "jwt-decode";
import type { UserData } from "@/store/UserStore";

export const registration = async (email: string, password: string): Promise<UserData> => {
   const { data } = await $defaultHost.post('api/user/registration', {
      email,
      password,
      role: 'ADMIN'
   });
   localStorage.setItem('token', data.jwt);
   return jwt_decode(data.jwt);
}

export const login = async (email: string, password: string): Promise<UserData> => {
   const { data } = await $defaultHost.post('api/user/login', {
      email,
      password,
   });
   localStorage.setItem('token', data.jwt);
   return jwt_decode(data.jwt);
}

export const check = async () => {
   const { data } = await $authHost.get('api/user/auth');
   return data;

}