

export function Main() {

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="card">
                        <div className="card-heading">
                            <img src="assets/images/logo-1.png" />
                            <h1>Camakara</h1>
                            <hr />
                            <p>atau belum memiliki akun ? <a href="daftar.html">Daftar sekarang</a> </p>
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