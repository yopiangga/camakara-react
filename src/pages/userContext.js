import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const currentUser = JSON.parse(localStorage.getItem("data"))
  const iniateUser = currentUser ? currentUser : null
  const [user, setUser] = useState(iniateUser); 

const [menuActive, setMenuActive] = useState();
const [detailUser, setDetailUser] = useState({firstname: "", lastname: "", fullname: "", email: "", telp: "", school: "", graduate: ""});
const [url, setUrl] = useState({api: `http://192.168.137.2/project/4/admin/api/`, baseUrl: "http://192.168.137.2/"});
// const [url, setUrl] = useState({api: `http://admin.petikdua.store/api/`, baseUrl: "http://admin.petikdua.store/"});
const [tryout, setTryout] = useState([]);
const [category, setCategory] = useState([1,2,3]);

  return (
    <UserContext.Provider value={[menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, category, setCategory]}>
      {props.children}
    </UserContext.Provider>
  );
};