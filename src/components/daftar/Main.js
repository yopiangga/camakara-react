

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
                            <p>atau sudah memiliki akun ? <a href="login.html">Masuk sekarang</a> </p>
                        </div>

                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" name="nama" placeholder="Nama Lengkap" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label>No Telephone</label>
                                    <input type="text" name="telephone" placeholder="+62 823 xxxx xxxx" />
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