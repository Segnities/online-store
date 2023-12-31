import {$authHost, $defaultHost} from "./index";
import jwt_decode from "jwt-decode";
import type {UserData} from "@/store/UserStore";

export const refreshToken = async (): Promise<string | null> => {
    console.log('refresh_token works!');
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) {
        return null;
    }
    try {
        const {data} = await $authHost.post('api/user/refresh-token', {refresh_token});
        console.log(data)
        localStorage.setItem('access_token', data?.access_token);
        return data?.access_token;
    } catch (e) {
        console.log('Refresh token error', e);
        return null;
    }
}
export const registration = async (email: string, password: string): Promise<UserData> => {
    const {data} = await $defaultHost.post('api/user/registration', {
        email,
        password,
    });
    localStorage.setItem('access_token', data.jwt.access_token);
    localStorage.setItem('refresh_token', data.jwt.refresh_token);
    return jwt_decode(data.jwt);
}

export const login = async (email: string, password: string): Promise<UserData> => {
    const {data} = await $defaultHost.post('api/user/login', {
        email,
        password,
    });
    localStorage.setItem('access_token', data.jwt.access_token);
    localStorage.setItem('refresh_token', data.jwt.refresh_token);

    return jwt_decode(data.jwt);
}

export const auth = async (): Promise<UserData | null> => {
    let access_token = localStorage.getItem('access_token');
    if (!access_token) {
        return null;
    }
    console.log("Decoded user");
    let user:UserData | null = null;
    if (access_token) {
        user = jwt_decode(access_token);
        console.log('User', user)
        const currentTime = Date.now() / 1000;
        //@ts-ignore
        if (user.exp && user.exp < currentTime) {
            access_token = await refreshToken();
            if (!access_token) {
                return null;
            }
        }
        return user;
    }
    // @ts-ignore
    const { data } = await $authHost.get('api/user/auth', {id: user.id, email: user.email, role: user.role});
    return jwt_decode(data?.access_token);
}