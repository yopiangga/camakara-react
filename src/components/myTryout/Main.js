import { useContext, useEffect, useState } from "react";
import { FaGraduationCap, FaHourglass } from "react-icons/fa";
import { useHistory } from "react-router";
import axios from 'axios';
import { UserContext } from "../../pages/userContext";

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [myTryouts, setMyTryouts] = useState([{ name: "" }])
    const [choice, setChoice] = useState('all');

    useEffect(() => {
        axios.get(`${url.api}/mytryout/1/${user.idUser}`).then(
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
                // console.log(res);
                setTryout(res.data.data);
                localStorage.setItem("tryoutReady", JSON.stringify(res.data.data));
                history.push("/tryout-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleChoice = (event) => {
        switch(event.target.value){
            case 'all'  :
                setChoice('all');
                break;
            case 1      :
                setChoice(1);
                break;
            case 2      :
                setChoice(2);
                break;
            case 3      : 
                setChoice(3);
                break;
            case 4      : 
                setChoice(4);
                break;
        }
    }

    // console.log(myTryouts);

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Tryout Saya</h2>
                        <div className="filter">
                            <select name="" id="" className="filter-jenis" onChange={handleChoice}>
                                <option value="all">Semua</option>
                                <option value="1">Tryout UTBK</option>
                                <option value="2">Tryout Bebas</option>
                                <option value="3">Tryout Kuno</option>
                                <option value="4">Paket Tryout</option>
                            </select>
                        </div>
                    </div>
                    <div className="content-body">

                        {
                            myTryouts.map(function (el, idx) {
                                if(choice == 'all'){
                                    return (
                                        <div className="card" key={idx}>
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
                                                    <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Kerjakan</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    if(choice == el.type_tryout){
                                        return (
                                            <div className="card" key={idx}>
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
                                                        <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Kerjakan</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}