
import example from '../../assets/images/example.jpg';
import { useHistory } from "react-router"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../pages/userContext';
import axios from 'axios';

export function CardTryout() {
    let history = useHistory()

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl] = useContext(UserContext);

    const [tryout, setTryout] = useState();

    const handleBeli = () => {
        history.push("/beli-tryout-detail")
    }

    useEffect(() => {

        axios.get(`${url.api}tryout/1`).then(
            (res) => {
                // console.log(res);
                setTryout(res.data.data.tryouts);
            }
        ).catch((err) => {
            // window.alert(err);
            console.log(err);
        })

    }, [])

    console.log(tryout);

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