import { useContext } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png'; 
import { UserContext } from "../../pages/userContext";
import axios from 'axios';


export function Main() {

    // const [, , user, setUser] = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
       const email = document.querySelector('#email').value;
       const nama = document.querySelector('#nama').value;
       const password = document.querySelector('#password').value;
       const telephone = parseInt(document.querySelector('#telephone').value);

    //    console.log(email, nama, password, telephone);

       axios.post(`http://admin.petikdua.store/api/user`, {
            email: email,
            password: password,
            fullname: nama,
            telp: telephone
        }).then(
            (res) => {
                alert("pendaftaran berhasil");
                console.log(res);
            }
        ).catch((err) => {
            alert("pendaftaran gagal");
            console.log(err);
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
                            <p>atau sudah memiliki akun ? <Link to="/login">Masuk sekarang</Link> </p>
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
                                    <label>No Telephone</label>
                                    <input type="text" name="telephone" id="telephone" placeholder="+62 823 xxxx xxxx" />
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