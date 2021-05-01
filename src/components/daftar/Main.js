import { useContext } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png'; 
import { UserContext } from "../../pages/userContext";
import axios from 'axios';
import Particles from "react-particles-js";


export function Main() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl] = useContext(UserContext);

    const history = useHistory();

    const handleSubmit = (event) => {
        document.querySelector('.bg-loading').classList.add('active');
        event.preventDefault();
       const email = document.querySelector('#email').value;
       const nama = document.querySelector('#nama').value;
       const password = document.querySelector('#password').value;
       const telephone = parseInt(document.querySelector('#telephone').value);


       axios.post(`${url.api}user`, {
            email: email,
            password: password,
            fullname: nama,
            telp: telephone
        }).then(
            (res) => {
                // console.log(res);
                history.push('/login');
                document.querySelector('.bg-loading').classList.remove('active');
            }
        ).catch((err) => {
            alert("pendaftaran gagal");
            // console.log(err);
            document.querySelector('.bg-loading').classList.remove('active');
        })
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
                            <p>Atau sudah memiliki akun ? <Link to="/login">Masuk sekarang.</Link> </p>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" name="nama" id="nama" placeholder="Nama Lengkap" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label>No Telepon</label>
                                    <input type="text" name="telephone" id="telephone" placeholder="0823 xxxx xxxx" />
                                </div>

                                <button type="submit" className="btn-daftar">Daftar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}