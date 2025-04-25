import { db, ref, set, get, child } from "../firebaseConfig";
import {  } from "firebase/auth";

// Function to write data to the Realtime Database
const writeUserData = (userId: string, name: string, email: string) => {
    set(ref(db, "users/" + userId), {
        username: name,
        email: email,
    })
        .then(() => {
            console.log("Data saved successfully!");
        })
        .catch(() => {
            console.error("Error saving data:");
        });
};

// Function to read data from the Realtime Database
const readUserData = (userId: string) => {
    const dbRef = ref(db);
    get(child(dbRef, "users/" + userId))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch(() => {
            console.error("Error reading data:");
        });
};

export { writeUserData, readUserData };
