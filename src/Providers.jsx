/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const authValue = {
        user,
        setUser,
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