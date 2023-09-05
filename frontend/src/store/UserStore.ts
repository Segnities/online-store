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

    constructor() {
        this._isAuth = false;
        this._user = null;
        makeAutoObservable(this);
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }
    setUser(user: UserData | null) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}