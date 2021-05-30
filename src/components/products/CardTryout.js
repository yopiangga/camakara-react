
import example from '../../assets/images/example.jpg';
import { useHistory } from "react-router"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../pages/userContext';
import axios from 'axios';

export function CardTryout() {
    let history = useHistory()

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, category, setCategory, quiz, setQuiz] = useContext(UserContext);
    const [tryouts, setTryouts] = useState([{}]);
    const [quizs, setQuizs] = useState([{}]);

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

    useEffect(() => {

        if (user == null) {
            axios.get(`${url.api}tryout`).then(
                (res) => {
                    setTryouts(res.data.data.tryouts);
                }
            ).catch((err) => {
                console.log(err);
            })

            axios.get(`${url.api}quiz`).then(
                (res) => {
                    console.log(res);
                }
            ).catch((err) => {
                console.log(err);
            })
        } else {
            axios.get(`${url.api}tryout/${user.idUser}`).then(
                (res) => {
                    setTryouts(res.data.data.tryouts);
                    // console.log(res);
                }
            ).catch((err) => {
                console.log(err);
            })

            axios.get(`${url.api}quiz`).then(
                (res) => {
                    console.log(res);
                    setQuizs(res.data.data);
                }
            ).catch((err) => {
                console.log(err);
            })
        }

    }, [])

    const validasi = (el) => {
        if (el != null) {
            for (let i = 0; i < 4; i++) {
                if (el[i] == category[0]) {
                    return 1;
                }
            }
        }
        return 0;
    }

    const handleDetail = (event) => {
        axios.get(`${url.api}quiz/get/${event.target.value}`).then(
            (res) => {
                // console.log(res);
                setQuiz(res.data.data);
                localStorage.setItem("quiz", JSON.stringify(res.data.data));
                history.push("/ikuti-quiz-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <section className="card-tryout">
                <div className="content">

                    {
                        tryouts.map(function (el, idx) {
                            if (validasi(el.cat_tryout) || category[0] == 1 && category[1] == 2 && category[2] == 3 && category[3] == 4) {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-image">
                                            {
                                                (el.image == "") ?
                                                    <img src={example} alt="" />
                                                    :
                                                    <img src={el.image} alt="" />
                                            }
                                        </div>
                                        <div className="card-body">
                                            {/* <h6>{el.cat_tryout}</h6> */}
                                            <h3>{el.name}</h3>
                                            <p>{el.descript}</p>
                                            <div className="action">
                                                <button className="btn-beli" value={el.id_tryout} onClick={handleBeli}>Beli Sekarang</button>
                                                {
                                                    (el.payment_method == 3) ? <h4>Rp {el.price}</h4> : <h4></h4>
                                                }
                                                {
                                                    (el.payment_method == 2) ? <h4>Bebas</h4> : <h4></h4>
                                                }
                                                {
                                                    (el.payment_method == 1) ? <h4>Gratis</h4> : <h4></h4>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }


                    {
                        quizs.map(function (el, idx) {
                            if (category[0] == 4) {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-image">
                                            {
                                                (el.image == "") ?
                                                    <img src={example} alt="" />
                                                    :
                                                    <img src={el.image} alt="" />
                                            }
                                        </div>
                                        <div className="card-body">
                                            {/* <h6>{el.cat_tryout}</h6> */}
                                            <h3>{el.name}</h3>
                                            <p>{el.descript}</p>
                                            <div className="action">
                                                <button className="btn-beli" value={el.id_quiz} onClick={handleDetail}>Detail Quiz</button>
                                                <h4>{el.mapel}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </section>
        </div>
    )
}