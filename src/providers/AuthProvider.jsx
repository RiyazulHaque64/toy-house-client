/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(true);
  const [user, setUser] = useState(null);
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (currentUser, userInfo) => {
    return updateProfile(currentUser, {
      displayName: userInfo.userName,
      photoURL: userInfo.photoUrl,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    signinWithGoogle,
    createUser,
    loginUser,
    updateUser,
    logOut,
    user,
    loading,
    setLoading,
    setUserProfile,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedinUser) => {
      setUser(loggedinUser);
      setUserProfile(true);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [loading]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
