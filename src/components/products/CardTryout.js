
import example from '../../assets/images/example.jpg';
import { useHistory } from "react-router"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../pages/userContext';
import axios from 'axios';

export function CardTryout() {
    let history = useHistory()

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [tryouts, setTryouts] = useState([]);

    const handleBeli = (event) => {
        console.log(event.target.value);
        axios.get(`${url.api}tryout/get/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                history.push("/beli-tryout-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {

        axios.get(`${url.api}tryout/1`).then(
            (res) => {
                setTryouts(res.data.data.tryouts);
            }
            ).catch((err) => {
                console.log(err);
            })
            
        }, [])

    return (
        <div>
            <section className="card-tryout">
                <div className="content">

                    {/* <div className="card cardUtbk">
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
                    </div> */}
                               
                    {
                        tryouts.map(function (el, idx) {
                            return (
                                <div className="card" key={idx}>
                                    <div className="card-image">
                                        <img src={example} />
                                    </div>
                                    <div className="card-body">
                                        <h6>{el.cat_tryout}</h6>
                                        <h3>{el.name}</h3>
                                        <div className="action">
                                            <button className="btn-beli" value={el.id_tryout} onClick={handleBeli}>Beli Sekarang</button>
                                            <h4>Rp {el.price}K</h4>
                                        </div>
                                    </div>
                                </div>
                            )   
                        }) 
                    }
                    
                </div>
            </section>
        </div>
    )
}