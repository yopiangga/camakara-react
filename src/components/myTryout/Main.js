import { useContext, useEffect, useState } from "react";
import { FaGraduationCap, FaHourglass } from "react-icons/fa";
import { useHistory } from "react-router";
import axios from 'axios';
import { UserContext } from "../../pages/userContext";

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [myTryouts, setMyTryouts] = useState([{ name: "" }])

    useEffect(() => {
        axios.get(`${url.api}/mytryout/1/${detailUser.id_user}`).then(
            (res) => {
                setMyTryouts(res.data.data.tryouts);
            }
        ).catch((err) => {
            console.log(err);
        })

    }, [])


    let history = useHistory()
    const handleKerjakan = () => {
        history.push("/tryout-detail");
    }

    console.log(myTryouts);

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Tryout Saya</h2>
                        <div className="filter">
                            <select name="" id="" className="filter-jenis">
                                <option>Jenis Tryout</option>
                                <option value="semua">Semua</option>
                                <option value="utbk">Tryout UTBK</option>
                                <option value="bebas">Tryout Bebas</option>
                                <option value="paket">Paket Tryout</option>
                                <option value="kuno">Tryout Kuno</option>
                            </select>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Tryout V3 UTBK</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="icon">
                                    <div className="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="jenis">
                                    <FaGraduationCap />
                                    <h4>Tryout UTBK</h4>
                                </div>
                                <div className="aksi">
                                    <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                </div>
                            </div>
                        </div> */}
                        {
                            myTryouts.map(function (el, idx) {
                                return (
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="text">
                                                <h3>{el.name}</h3>
                                                <p>{el.descript}</p>
                                            </div>
                                            <div className="icon">
                                                <div className="circle">
                                                    <FaHourglass />
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
                                                <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}