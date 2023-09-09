import { $authHost, $defaultHost } from "./index";
import jwt_decode from "jwt-decode";
import type { UserData } from "@/store/UserStore";

export const registration = async (email: string, password: string): Promise<UserData> => {
   const { data } = await $defaultHost.post('api/user/registration', {
      email,
      password,
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

export const auth = async ():Promise<UserData> => {
   const { data } = await $authHost.get('api/user/auth');
   localStorage.setItem('token', data.jwt);
   return jwt_decode(data.jwt);
}