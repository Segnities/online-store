import { makeAutoObservable } from "mobx";

export interface UserData {
    id: number;
    email: string;
    exp: number;
    iat: number;
    role?: string;
}


export default class UserStore {
    private _isAuth: boolean;
    private _user: UserData | null;

    private _isAuthLoading: boolean;

    constructor() {
        this._isAuth = false;
        this._user = null;
        this._isAuthLoading = false;
        makeAutoObservable(this);
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }
    setUser(user: UserData | null) {
        this._user = user;
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

    get user() {
        return this._user;
    }
    get role() {
        return this._user?.role;
    }
}