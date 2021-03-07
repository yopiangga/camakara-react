import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const currentUser = JSON.parse(localStorage.getItem("data"))
  const iniateUser = currentUser ? currentUser : null
  const [user, setUser] = useState(iniateUser);

const [menuActive, setMenuActive] = useState();
const [detailUser, setDetailUser] = useState({firstname: "", lastname: "", fullname: "", email: "", telp: "", school: "", graduate: ""});
const [url, setUrl] = useState({api: `http://admin.petikdua.store/api/`, baseUrl: "http://admin.petikdua.store"});
const [tryout, setTryout] = useState([]);

  return (
    <UserContext.Provider value={[menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout]}>
      {props.children}
    </UserContext.Provider>
  );
};