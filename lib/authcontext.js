import React, { useEffect, useState} from "react";
import { auth } from "./auth";
import Router from 'next/router';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {

            if(user) {
                setCurrentUser(user)
                setPending(false)
                return
            }
            setPending(false)
            Router.push('/')
    });
    }, []);

    if(pending){
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

