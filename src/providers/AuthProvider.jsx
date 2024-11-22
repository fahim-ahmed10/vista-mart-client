import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (firstName) => {
    return updateProfile(auth.currentUser, {
      displayName: firstName,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user", currentUser);
      if (currentUser) {
        axiosSecure
          .post(`/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data?.data?.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unSubscribe(); //we have to return to stop waching if the application is stopped
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleLogin,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
// Prop validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
