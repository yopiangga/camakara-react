import { useContext, useEffect, useState } from "react";
import { FaGraduationCap, FaCheck, FaExclamation, FaHourglass } from "react-icons/fa";
import { useHistory } from "react-router";
import axios from 'axios';
import { UserContext } from "../../pages/userContext";
import $ from 'jquery';

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, quiz, setQuiz] = useContext(UserContext);
    const [myTryouts, setMyTryouts] = useState([{ name: "" }])
    const [myQuizs, setMyQuizs] = useState([{ name: "" }])
    const [choice, setChoice] = useState('0');
    const [score, setScore] = useState({
        amountSoal: "",
        correct: "",
        dataMeet: "",
        link: "",
        media: "",
        mediaid: "",
        name: "",
        nameAdmin: "",
        onPayment: "",
        password: "",
        percenValue: "",
        timeMeet: "",
        idQuiz: ""
    });
    const [priceQuiz, setPriceQuiz] = useState(0);

    let history = useHistory();

    useEffect(() => {
        if (user == null) {
            history.push('/');
        } else {
            axios.get(`${url.api}mytryout/${user.idUser}`).then(
                (res) => {
                    setMyTryouts(res.data.data.tryouts);
                }
            ).catch((err) => {
                console.log(err);
            })

            axios.get(`${url.api}myquiz/${user.idUser}`).then(
                (res) => {
                    console.log(res.data);
                    setMyQuizs(res.data.data);
                }
            ).catch((err) => {
                console.log(err);
            })
        }

    }, [])


    const handleKerjakan = (event) => {
        document.querySelector('.bg-loading').classList.add('active');
        axios.get(`${url.api}mytryout/get/${user.idUser}/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                localStorage.setItem("tryout", JSON.stringify(res.data.data));

                $('.bg-loading').removeClass('active');
                // document.querySelector('.bg-loading').classList.remove('active');
                history.push("/tryout-detail");
            }
        ).catch((err) => {
            // document.querySelector('.bg-loading').classList.remove('active');
            $('.bg-loading').removeClass('active');
            console.log(err);
        })
    }

    const handleChoice = (event) => {
        setChoice(event.target.value);
    }

    const validasi = (event) => {
        if (choice == '0')
            return 1;
        return (choice == event);
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

        if (saatIni < dateEnd) {
            return ('kerjakan')
        } else {
            return ('lihat-skor');
        }
    }

    const handleAkumulasi = (event) => {
        axios.get(`${url.api}/score/${user.idUser}/${event.target.value}`).then(
            (res) => {
                console.log(res.data);
                localStorage.setItem("skorTryout", JSON.stringify(res.data));
                history.push("/skor-tryout");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    // console.log(myQuizs);
    const handleKerjakanQuiz = (id, idx) => {
        document.querySelector('.bg-loading').classList.add('active');

        axios.post(`${url.api}examquiz/${user.idUser}/${myQuizs[idx].id_quiz}`).then(
            (res) => {
                console.log(res);
                localStorage.setItem("quizMapelInfo", JSON.stringify(res.data));
            }
        ).catch((err) => {
            console.log(err);
        })

        axios.get(`${url.api}examquiz/${id}`).then(
            (res) => {
                console.log(res);
                setTryout(res.data.data);
                localStorage.setItem("quiz", JSON.stringify(res.data.data));
                localStorage.setItem("quizMapel", JSON.stringify(myQuizs[idx]));
                document.querySelector('.bg-loading').classList.remove('active');
                history.push("/exam-quiz");
            }
        ).catch((err) => {
            // document.querySelector('.bg-loading').classList.remove('active');
            $('.bg-loading').removeClass('active');
            console.log(err);
        })

    }

    const handleSkorQuiz = (id) => {
        axios.get(`${url.api}examquiz/score/${user.idUser}/${id}`).then(
            (res) => {
                console.log(res);
                setScore(res.data.data[0]);
                document.querySelector('.modal-quiz').classList.add('active');
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handleCancel = () => {
        document.querySelector('.modal-quiz').classList.remove('active');
    }

    const handleChangePriceQuiz = (event) => {
        setPriceQuiz(event.target.value);
    }

    const handleKirimInvoice = (event) => {
        event.preventDefault();
        axios.post(`${url.api}myquiz/invoice/${user.idUser}/${score.idQuiz}`, { price: priceQuiz }).then(
            (res) => {
                // console.log(res);
                $('.bg-loading').removeClass('active');
                // document.querySelector('.modal-quiz').classList.remove('active');
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="modal-quiz">
                <div className="form">
                    <h2>Hasil Quiz!</h2>
                    <p>Skor quiz <span>{score.name}</span> yang telah anda kerjakan.</p>

                    <div className="skor-quiz">
                        <div className="box-skor">
                            <h3>{score.percenValue}</h3>
                        </div>
                    </div>
                    <div className="soal">
                        <h3><span>{score.correct}</span>/{score.amountSoal} Soal</h3>
                    </div>

                    {
                        (!score.onPayment) ?
                            <form className="form-biodata" method="POST" onSubmit={handleKirimInvoice}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            {/* <label htmlFor="">Bayar Seikhlasnya (dipotong dari saldo Camakara)</label> */}
                                            <input type="number" name="nominal" placeholder="Bayar Seikhlasnya (dipotong dari saldo Camakara)" value={priceQuiz} onChange={handleChangePriceQuiz} />
                                        </div>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button className="btn-cancel" name="cancel" type="button" onClick={handleCancel}>BATAL</button>
                                    <button className="btn-submit" name="submit" type="submit">KIRIM</button>
                                </div>
                            </form>
                            :
                            <div className="meet">
                                <div className="item">
                                    <div className="media">
                                        {
                                            (score.mediaId == '1') ?
                                            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/07/google-meet-logo.png" alt="" />
                                            :
                                            <img src="https://www.pngarts.com/files/7/Zoom-Logo-PNG-Photo.png" alt="" /> 
                                        }
                                        <h3>{score.media}</h3>
                                    </div>
                                    <div className="list-item">
                                        <div className="point">
                                            <div className="point-left">
                                                <h4>Nama Admin</h4>
                                            </div>
                                            <div className="point-right">
                                                <h4>{score.nameAdmin}</h4>
                                            </div>
                                        </div>
                                        <div className="point">
                                            <div className="point-left">
                                                <h4>Link</h4>
                                            </div>
                                            <div className="point-right">
                                                <h4>{score.link}</h4>
                                            </div>
                                        </div>
                                        <div className="point">
                                            <div className="point-left">
                                                <h4>Password</h4>
                                            </div>
                                            <div className="point-right">
                                                <h4>{score.password}</h4>
                                            </div>
                                        </div>
                                        <div className="point">
                                            <div className="point-left">
                                                <h4>Tanggal</h4>
                                            </div>
                                            <div className="point-right">
                                                <h4>{score.dateMeet}</h4>
                                            </div>
                                        </div>
                                        <div className="point">
                                            <div className="point-left">
                                                <h4>Waktu</h4>
                                            </div>
                                            <div className="point-right">
                                                <h4>{score.timeMeet}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn">
                                        <button className="btn-submit" type="button" onClick={handleCancel}>TUTUP</button>
                                    </div>
                                </div>
                            </div>
                    }

                </div>
            </div>
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
                            myQuizs.map(function (el, idx) {
                                if (validasi(el.type_tryout)) {
                                    return (
                                        <div className="card" key={idx}>
                                            <div className="card-body">
                                                <div className="text">
                                                    <h3>{el.name}</h3>
                                                    <p>{el.descript}</p>
                                                </div>
                                                <div className="icon">
                                                    <div className="circle">
                                                        <FaCheck style={{ color: 'green' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="jenis">
                                                    <FaGraduationCap />
                                                    <h4>{el.mapel_name}</h4>
                                                </div>
                                                <div className="aksi">
                                                    {(el.finish == '0') ? <button className="btn-kerjakan" value={el.id_quiz} onClick={() => handleKerjakanQuiz(el.id_quiz, idx)}>Kerjakan</button> : <div></div>}
                                                    {(el.finish == '1') ? <button className="btn-kerjakan" value={el.id_quiz} onClick={() => handleSkorQuiz(el.id_quiz)}>Skor Quiz</button> : <div></div>}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                        {
                            myTryouts.map(function (el, idx) {
                                if (validasi(el.type_tryout)) {
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
                                                    {/* {(el.status == '2' && (hariIni(el.date_end, el.time_end) == 'kerjakan')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Kerjakan</button> : <div></div> } */}
                                                    {/* {(el.status == '2' && (hariIni(el.date_end, el.time_end) == 'lihat-skor')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleAkumulasi}>Akumulasi</button> : <div></div> } */}
                                                    {(el.status == '2' && (el.finish == '0')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleKerjakan}>Kerjakan</button> : <div></div>}
                                                    {(el.status == '2' && (el.finish == '1')) ? <button className="btn-kerjakan" value={el.id_tryout} onClick={handleAkumulasi}>Akumulasi</button> : <div></div>}
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