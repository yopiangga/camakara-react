import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
//   const currentUser = JSON.parse(localStorage.getItem("data"))
//   const iniateUser = currentUser ? currentUser : null
//   const [user, setUser] = useState(iniateUser);

const [menuActive, setMenuActive] = useState()

  return (
    <UserContext.Provider value={[menuActive, setMenuActive]}>
      {props.children}
    </UserContext.Provider>
  );
};