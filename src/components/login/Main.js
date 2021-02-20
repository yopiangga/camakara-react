

export function Main() {

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="card">
                        <div className="card-heading">
                            <img src="assets/images/logo-1.png" alt="" />
                            <h1>Camakara</h1>
                            <hr />
                            <p>atau belum memiliki akun ? <a href="daftar.html">Daftar sekarang</a> </p>
                        </div>

                        <div className="card-body">
                            <form action="beranda.html">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>

                                <a href="lupa-password.html">Lupa Password ?</a>

                                <button type="submit" className="btn-login">Masuk</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}