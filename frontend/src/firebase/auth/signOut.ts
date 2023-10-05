import {getAuth, signOut} from "firebase/auth";
import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function firebaseSignOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    } finally {

    }
}