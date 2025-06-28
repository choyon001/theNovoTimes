import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("Current User",currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        setUser,
        createNewUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;