import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Particles from "react-particles-js";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png';
import { UserContext } from "../../pages/userContext";

export function Main() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, quiz, setQuiz] = useContext(UserContext);

    const [dataForgot, setDataForgot] = useState({ email: "", token: "", password1: "", password2: "", step: 0 });

    const history = useHistory();

    const handleRepeat = () => {
        history.push('/lupa-password');
    }

    const handleChange = (event) => {
        event.preventDefault();
        setDataForgot({
            ...dataForgot,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        document.querySelector('.bg-loading').classList.add('active');
        if (dataForgot.step == 0) {
            axios.post(`${url.api}user/forgot/${dataForgot.email}`).then(
                (res) => {
                    if (!res.data.errors) {
                        setDataForgot({
                            ...dataForgot,
                            step: 1
                        })
                    }
                    document.querySelector('.bg-loading').classList.remove('active');
                }
            ).catch((err) => {
                console.log(err);
            })
        } else if (dataForgot.step == 1) {
            axios.post(`${url.api}user/vtoken/${dataForgot.email}/${dataForgot.token}`).then(
                (res) => {
                    if (!res.data.errors) {
                        setDataForgot({
                            ...dataForgot,
                            step: 2
                        })
                    }
                    document.querySelector('.bg-loading').classList.remove('active');
                }
            ).catch((err) => {
                console.log(err);
            })
        } else if (dataForgot.step == 2) {
            if(dataForgot.password1 == dataForgot.password2 && dataForgot.password1 != ''){
                axios.post(`${url.api}user/setpw/${dataForgot.email}/${dataForgot.token}`, { password: dataForgot.password1 }).then(
                    (res) => {
                        document.querySelector('.bg-loading').classList.remove('active');
                        history.push('/login');
                    }
                ).catch((err) => {
                    console.log(err);
                })
            }
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
                            <img src={logo1} />
                            <h1>Camakara</h1>
                            <hr />
                            <p>atau belum memiliki akun ? <Link to="/daftar">Daftar sekarang</Link> </p>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {
                                    (dataForgot.step == 0) ?
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="Email" value={dataForgot.email} onChange={handleChange} />
                                        </div>
                                        :
                                        <div></div>
                                }

                                {
                                    (dataForgot.step == 1) ?
                                        <div className="form-group">
                                            <label>Token OTP</label>
                                            <input type="text" name="token" placeholder="Token OTP" value={dataForgot.token} onChange={handleChange} />
                                        </div>
                                        :
                                        <div></div>
                                }

                                {
                                    (dataForgot.step == 2) ?
                                        <div className="form-group">
                                            <label>New Password</label>
                                            <input type="password" name="password1" placeholder="New Password" value={dataForgot.password1} onChange={handleChange} />
                                        </div>
                                        :
                                        <div></div>
                                }

                                {
                                    (dataForgot.step == 2) ?
                                        <div className="form-group">
                                            <label>Repeat Password</label>
                                            <input type="password" name="password2" placeholder="Repeat Password" value={dataForgot.password2} onChange={handleChange} />
                                        </div>
                                        :
                                        <div></div>
                                }


                                <button type="submit" className="btn-lupa-password">Submit</button>

                                <a onClick={handleRepeat}>Kirim ulang kode verifikasi</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}