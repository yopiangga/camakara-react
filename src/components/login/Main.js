import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../pages/userContext";
import Particles from "react-particles-js";

export function Main() {
    let history = useHistory();

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl] = useContext(UserContext);
    const [alert, setAlert] = useState("");

    const handleSubmit = (event) => {
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        event.preventDefault();

        if (email == "" || password == "") {
            document.querySelector(".form-alert").classList.add("active");
            setAlert(<p><span>Email</span> dan <span>Password</span> harus di isi!</p>)
        } else {
            document.querySelector('.bg-loading').classList.add('active');
            axios.post(`${url.api}user/login`, { email: email, password: password })
                .then(
                    (res) => {
                        // console.log(res.data);
                        let currentUser;
                        let email = res.data.data.email;
                        let token = res.data.token;
                        let idUser = res.data.data.id;

                        if (idUser) {
                            currentUser = { email: email, token: token, idUser: idUser };
                            setUser(currentUser);
                            localStorage.setItem("data", JSON.stringify(currentUser));

                            document.querySelector('.bg-loading').classList.remove('active');
                            history.push('/');
                        } else {
                            document.querySelector(".form-alert").classList.add("active");
                            setAlert(<p><span>Email</span> dan <span>Password</span> tidak sesuai</p>)
                        }
                    }
                ).catch((err) => {
                    document.querySelector('.bg-loading').classList.remove('active');
                    document.querySelector(".form-alert").classList.add("active");
                    setAlert(<p><span>Email</span> dan <span>Password</span> tidak sesuai</p>)
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <div className="bg-particles">
                <Particles />
            </div>
            <section className="main">
                <div className="content">
                    <div className="card">
                        <div className="card-heading">
                            <img src={logo1} alt="" />
                            <h1>Camakara</h1>
                            <hr />
                            <p>Atau belum memiliki akun ? <Link to="/daftar">Daftar sekarang.</Link></p>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-alert">
                                    {alert}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" />
                                </div>

                                <Link to="lupa-password">Lupa Password ?</Link>

                                <button type="submit" className="btn-login">Masuk</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}