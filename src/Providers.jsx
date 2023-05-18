/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.init';


const auth = getAuth(app);
export const AuthProvider = createContext(null);

const Providers = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    // observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authValue = {
        user,
        createUser,
        loggedInUser,
        logOut
    }
    return (
        <div>
            <AuthProvider.Provider value={authValue}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Providers;