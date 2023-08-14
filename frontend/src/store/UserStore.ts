import { makeAutoObservable } from "mobx";

export default class UserStore {
    private _isAuth: boolean;
    private _user: any;
    
    constructor() {
        this._isAuth = false;
        this._user = null;
        makeAutoObservable(this);
    }

    setIsAuth(auth:boolean) {
        this._isAuth = auth;    
    }
    setUser(user:any) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}