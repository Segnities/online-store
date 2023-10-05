import { makeAutoObservable } from "mobx";

import type {User as GoogleUser} from "firebase/auth";

export interface UserData {
    id: number;
    email: string;
    exp: number;
    iat: number;
    role?: string;
}
export default class UserStore {
    private _isAuth: boolean;

    private _jwtAuthUser: UserData | null;
    private _isAuthLoading: boolean;

    private _googleAuthUser:GoogleUser | undefined;

    constructor() {
        this._isAuth = false;
        this._jwtAuthUser = null;
        this._isAuthLoading = false;
        makeAutoObservable(this);
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }
    setJwtUser(user: UserData | null) {
        this._jwtAuthUser = user;
    }

    setGoogleUser(user: GoogleUser | undefined) {
        this._googleAuthUser = user;
    }

    stopLoadingAuth() {
        this._isAuthLoading = false;
    }

    get isAuth() {
        return this._isAuth;
    }

    get isAuthLoading() {
        return this._isAuthLoading;
    }

    get jwtAuthUser() {
        return this._jwtAuthUser;
    }
    get role() {
        return this._jwtAuthUser?.role;
    }
}