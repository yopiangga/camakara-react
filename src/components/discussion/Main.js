import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../pages/userContext"
import axios from "axios";
import { useHistory } from "react-router";

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [answer, setAnswer] = useState([]);
    const [waktuAll, setWaktuAll] = useState({ time: "", timeStart: "" });
    const [tryoutReadyMapel, setTryoutReadyMapel] = useState([{
        namamapel: "",
        no_soal: "",
        soal: "",
        pilihan1: "",
        pilihan2: "",
        pilihan3: "",
        pilihan4: "",
        pilihan5: "",
    }]);
    const [noSoal, setNoSoal] = useState(0);

    const history = useHistory();

    useEffect(() => {
        if(user == null){
            history.push('/');
        }
        setTryout(JSON.parse(localStorage.getItem('tryout')));
        setTryoutReadyMapel(JSON.parse(localStorage.getItem('tryoutReadyMapel')));
        setWaktuAll({
            time: JSON.parse(localStorage.getItem('waktu')),
            timeStart: JSON.parse(localStorage.getItem('waktuStart'))
        });
    }, [])

    console.log(tryoutReadyMapel);

    const handleNomerSoal = (no) => {
        setNoSoal(no);
    }

    const handleJawab = (value) => {
        const arr = [...answer];
        arr[noSoal] = value;
        setAnswer(arr);
    }

    const handleSelesai = () => {
        axios.post(`${url.api}exam/${user.idUser}/${tryout.id_tryout}/${tryoutReadyMapel[0].kind_tryout}`, { answer: answer.toString() }).then(
            (res) => {
                console.log(`${url.api}exam/${detailUser.id_user}/${tryout.id_tryout}/${tryoutReadyMapel[0].kind_tryout}`);
                console.log(res);
                history.push('/tryout-detail');
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handlePrev = () => {
        setNoSoal(noSoal-1);
    }

    const handleNext = () => {
        setNoSoal(noSoal+1);
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-left">
                        <div className="heading">
                            <h1>{tryout.name}</h1>
                            <h2>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].namamapel}</h2>
                        </div>
                        <div className="question">
                            <h3>Soal {(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].no_soal}</h3>
                            <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].soal}</p>
                            <img src={(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].image} alt="" />
                        </div>
                        <hr />
                        <div className="answer">
                            <ul>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 1) ? "circle active" : "circle"} onClick={() => { handleJawab(1) }}>A</div>
                                    </div>
                                    <div className="text">
                                        <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].pilihan1}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 2) ? "circle active" : "circle"} onClick={() => { handleJawab(2) }}>B</div>
                                    </div>
                                    <div className="text">
                                        <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].pilihan2}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 3) ? "circle active" : "circle"} onClick={() => { handleJawab(3) }}>C</div>
                                    </div>
                                    <div className="text">
                                        <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].pilihan3}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 4) ? "circle active" : "circle"} onClick={() => { handleJawab(4) }}>D</div>
                                    </div>
                                    <div className="text">
                                        <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].pilihan4}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 5) ? "circle active" : "circle"} onClick={() => { handleJawab(5) }}>E</div>
                                    </div>
                                    <div className="text">
                                        <p>{(tryoutReadyMapel[noSoal] == null) ? "" : tryoutReadyMapel[noSoal].pilihan5}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="button-group">

                                {
                                    (noSoal == 0) ? 
                                    ""
                                    :
                                    <button className="btn-navigasi" onClick={handlePrev}>Sebelumnya</button>
                                }

                                {
                                (tryoutReadyMapel.length - 1 != noSoal) ?
                                    <button className="btn-navigasi" onClick={handleNext}>Selanjutnya</button>
                                    :
                                    ""
                                }

                                {
                                    (tryoutReadyMapel.length - 1 == noSoal) ?
                                        <button className="btn-submit" onClick={handleSelesai}>Selesai</button>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="timer">
                            <div className="box">
                                <h1 id="demo"></h1>
                            </div>
                        </div>

                        <div className="card" id="navigasi-soal">
                            <div className="card-body">
                                {
                                    tryoutReadyMapel.map(function (el, idx) {
                                        return (
                                            <div className={(noSoal == idx) ? "box active" : "box"} key={idx} onClick={() => { handleNomerSoal(idx) }}>{el.no_soal}</div>
                                        )
                                    })
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}