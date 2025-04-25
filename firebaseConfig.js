// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth , initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxx8EJf32tXJVO2ZpiWbKx1HV9tb7WbBg",
    authDomain: "yalla-app-2ca4a.firebaseapp.com",
    projectId: "yalla-app-2ca4a",
    databaseURL: "https://your-app-id.firebaseio.com",
    storageBucket: "yalla-app-2ca4a.firebasestorage.app",
    messagingSenderId: "1083058612841",
    appId: "1:1083058612841:web:26a743b897a8be840890f8",
    measurementId: "G-HRZKC9P0YN"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export { get, ref , set, child}
let auth;
try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
} catch (e) {
    // If already initialized, fallback to getAuth
    auth = getAuth(app);
}
export { auth };
export const db = getDatabase(app)
