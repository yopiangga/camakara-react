import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo1 from '../../assets/images/logo-1.png'; 

export function Main() {

    return (
        <div>
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
                            <form action="">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>

                                <button type="submit" className="btn-lupa-password">Kirim Kode Verifikasi</button>

                                <a href="">Kirim ulang kode verifikasi</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}