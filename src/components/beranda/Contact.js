import {FaFire} from "react-icons/fa"


export function Contact() {
    return(
        <div>
            <section className="beranda-contact">
                <div className="content">
                    <div className="content-left">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <div className="title">
                            <h2>Ikuti kami di Media Sosial</h2>
                        </div>
                        <div className="deskripsi">
                            <p>Camakara akan mengirim informasi terbaru ke email mu, silahkan masukan email aktif mu.</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="contoh@gmail.com" />
                            <button className="btn-action">Ikuti Kami</button>
                        </form>
                    </div>
                    <div className="content-right">
                        <form >
                            <h2>Kirimkan Pesan Anda</h2>
                            <div className="form-group">
                                <label>Nama anda</label>
                                <input type="text" placeholder="John doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" placeholder="contoh@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label>Pesan</label>
                                <textarea type="text" rows="5" placeholder="Pesan"></textarea>
                            </div>
                            <button className="btn-sendPesan">Kirimkan</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}