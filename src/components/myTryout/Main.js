import { useContext, useEffect, useState } from "react";
import { FaGraduationCap, FaCheck, FaExclamation, FaHourglass } from "react-icons/fa";
import { useHistory } from "react-router";
import axios from 'axios';
import { UserContext } from "../../pages/userContext";

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [myTryouts, setMyTryouts] = useState([{ name: "" }])
    const [choice, setChoice] = useState('0');

    useEffect(() => {
        axios.get(`${url.api}mytryout/${user.idUser}`).then(
            (res) => {
                setMyTryouts(res.data.data.tryouts);
            }
        ).catch((err) => {
            console.log(err);
        })

    }, [])

    let history = useHistory()

    const handleKerjakan = (event) => {
        axios.get(`${url.api}tryout/get/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                localStorage.setItem("tryoutReady", JSON.stringify(res.data.data));
                history.push("/tryout-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleChoice = (event) => {
        setChoice(event.target.value);
    }

    const validasi = (event) => {
        if(choice == '0')
            return 1;
        return(choice == event);
    }

    const handleBeli = (event) => {
        axios.get(`${url.api}tryout/get/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                localStorage.setItem("tryout", JSON.stringify(res.data.data));
                history.push("/beli-tryout-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const hariIni = (dateEnd, timeEnd) => {
        let saatIni = Date.now();
        dateEnd = `${dateEnd} ${timeEnd}`; 
        dateEnd = Date.parse(dateEnd);

        if(saatIni < dateEnd){
            return('kerjakan')
        } else{
            return('lihat-skor');
        } 
    }

    console.log(myTryouts);

    const handleSkor = () => {

    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Tryout Saya</h2>
                        <div className="filter">
                            <select name="" id="" className="filter-jenis" onChange={handleChoice}>
                                <option value="0">Semua</option>
                                <option value="1">Tryout UTBK</option>
                                <option value="2">Tryout Bebas</option>
                                <option value="3">Tryout Kuno</option>
                                {/* <option value="4">Paket Tryout</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="content-body">

                        {
                            myTryouts.map(function (el, idx) {
                                if(validasi(el.type_tryout)){
                                    return (
                                        <div className="card" key={idx}>
                                            <div className="card-body">
                                                <div className="text">
                                                    <h3>{el.name}</h3>
                                                    <p>{el.descript}</p>
                                                </div>
                                                <div className="icon">
                                                    <div className="circle">
                                                        {(el.status == '0') ? <FaExclamation /> : <div></div>}
                                                        {(el.status == '1') ? <FaHourglass style={{ color: 'orange' }} /> : <div></div>}
                                                        {(el.status == '2') ? <FaCheck style={{ color: 'green' }} /> : <div></div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="jenis">
                                                    <FaGraduationCap />
                                                    <h4>{(el.type_tryout == "1") ? "Tryout UTBK" : ""}</h4>
                                                    <h4>{(el.type_tryout == "2") ? "Tryout Bebas" : ""}</h4>
                                                    <h4>{(el.type_tryout == "3") ? "Tryout Lama" : ""}</h4>
                                                </div>
                                                <div className="aksi">
                                                    {(el.status == '0') ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleBeli}>Beli Lagi</button> : <div></div>}
                                                    {(el.status == '1') ? <button className="btn-kerjakan" style={{ backgroundColor: 'gray', color: 'white', border: 'none', cursor: 'default' }}>Tunggu Ya</button> : <div></div>}
                                                    {(el.status == '2' && (hariIni(el.date_end, el.time_end) == 'kerjakan')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Kerjakan</button> : <div></div> }
                                                    {(el.status == '2' && (hariIni(el.date_end, el.time_end) == 'lihat-skor')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Akumulasi</button> : <div></div> }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}