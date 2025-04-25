// authFunctions.js
import { auth } from "@/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log("Google user:", user);
        // Optional: Save to Realtime DB
    } catch (error) {
        console.error("Google login error:", error.message);
    }
};

export const logout = () => signOut(auth);
