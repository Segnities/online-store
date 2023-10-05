import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import firebase_app from "../config";

const auth = getAuth(firebase_app);
const googleAuthProvider = new GoogleAuthProvider();

export default async function firebaseSignUp() {
    try {
        const sign = await signInWithPopup(auth, googleAuthProvider);
        const token = GoogleAuthProvider.credentialFromResult(sign);
        const user = sign.user;

        return {user, token};
    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    } finally {
        console.log('Authenticated with Google!')
    }
}