/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
        loggedInUser
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