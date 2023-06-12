import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  // setCurrentUserLoggedIn: (user) => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurretUser] = useState(null);
  useEffect
  (() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurretUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
