import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png';
import React from 'react'; 
import axios from 'axios';

export function Main() {

    const handleSubmit = (event) => {
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        console.log(email, password);
        event.preventDefault();

        axios.post(`http://admin.petikdua.store/api/user/login`, { email: email, password: password})
        .then(
            (res) => {
                console.log(res)
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="card">
                        <div className="card-heading">
                            <img src={logo1} alt="" />
                            <h1>Camakara</h1>
                            <hr />
                            <p>atau belum memiliki akun ? <Link to="/daftar">Daftar sekarang</Link></p>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email"/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password"/>
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