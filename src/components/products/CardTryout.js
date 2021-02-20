
import example from '../../assets/images/example.jpg';
import { useHistory } from "react-router"

export function CardTryout() {
    let history = useHistory()

    const handleBeli = () => {
        history.push("/beli-tryout-detail")
    }

    return (
        <div>
            <section className="card-tryout">
                <div className="content">
                    <div className="card cardUtbk">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout UTBK</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardUtbk">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout UTBK</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardUtbk">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout UTBK</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardBebas">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout Bebas</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardBebas">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout Bebas</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardKuno">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout Kuno</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardPaket">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout Paket</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card cardKuno">
                        <div className="card-image">
                            <img src={example} />
                        </div>
                        <div className="card-body">
                            <h6>Tryout Kuno</h6>
                            <h3>UTBK Tryout V3 Sesi Maret 2021</h3>
                            <div className="action">
                                <button className="btn-beli" onClick={handleBeli}>Beli Sekarang</button>
                                <h4>Rp 29K</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}