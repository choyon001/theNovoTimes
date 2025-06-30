import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return  signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData);
  }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    signInUser,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
