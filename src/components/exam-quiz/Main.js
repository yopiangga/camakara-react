import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../pages/userContext"
import axios from "axios";
import { useHistory } from "react-router";
import $ from 'jquery';

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, quiz, setQuiz] = useContext(UserContext);
    const [quizMapel, setQuizMapel] = useState({});
    const [answer, setAnswer] = useState([]);
    const [waktuAll, setWaktuAll] = useState({ time: "", timeStart: "" });
    const [noSoal, setNoSoal] = useState(0);
    const [pembahasan, setPembahasan] = useState({ imagepembahasan: "", jawaban: "", pembahasan: "" });
    var navigasiSoal = [];

    const history = useHistory();

    useEffect(() => {
        if (user == null) {
            history.push('/');
        }

        setQuiz(JSON.parse(localStorage.getItem('quiz')));
        setQuizMapel(JSON.parse(localStorage.getItem('quizMapel')));

        setWaktuAll({
            time: JSON.parse(localStorage.getItem('waktu')),
            timeStart: JSON.parse(localStorage.getItem('waktuStart'))
        });
        $(`#${0}`).addClass('active');
    }, [])

    const initialiseJawab = (jawab) => {
        let i;
        for(i=0; i<quiz.length; i++){
            if(jawab[i] == null) {
                jawab[i] = 0;
            }
        }
        setAnswer(jawab);
    }

    const handleNomerSoal = (event) => {
        let no = parseInt(event.target.id);
        $('.pembahasan').removeClass('active');
        setNoSoal(no);
        handleNavigasiSoal(no);
    }

    const handleJawab = (value) => {
        const arr = [...answer];
        arr[noSoal] = value;
        setAnswer(arr);
        $(`#${noSoal}`).removeClass('danger');
        $(`#${noSoal}`).addClass('success');
    }

    const handleNavigasiSoal = (no) => {
        if (answer[no] == null) {
            $(`#${no}`).removeClass('success');
            $(`#${no}`).addClass('danger');
        }
        else if (answer[no] != null) {
            $(`#${no}`).removeClass('danger');
            $(`#${no}`).addClass('success');
        }
    }

    const handleSelesai = () => {
        initialiseJawab(answer);

        axios.post(`${url.api}examquiz/${user.idUser}/${quizMapel.id_quiz}`, { answer: answer.toString() }).then(
            (res) => {
                console.log(res);
            }
        ).catch((err) => {
            console.log(err);
        })

        axios.post(`${url.api}myquiz/finish/${user.idUser}/${quizMapel.id_quiz}`, {headers: {"Authorization" : `Bearer ${user.token}`}}).then(
            (res) => {
                console.log(res);
                history.push('/tryout-saya');
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handlePrev = () => {
        if (answer[noSoal - 1] == null) {
            $(`#${noSoal - 1}`).removeClass('success');
            $(`#${noSoal - 1}`).addClass('danger');
        }
        else if (answer[noSoal - 1] != null) {
            $(`#${noSoal - 1}`).removeClass('danger');
            $(`#${noSoal - 1}`).addClass('success');
        }

        setNoSoal(noSoal - 1);
        $('.pembahasan').removeClass('active');
    }

    const handleNext = () => {
        if (answer[noSoal + 1] == null) {
            $(`#${noSoal + 1}`).removeClass('success');
            $(`#${noSoal + 1}`).addClass('danger');
        }
        else if (answer[noSoal + 1] != null) {
            $(`#${noSoal + 1}`).removeClass('danger');
            $(`#${noSoal + 1}`).addClass('success');
        }

        setNoSoal(noSoal + 1);
        $('.pembahasan').removeClass('active');
    }

    const handlePembahasan = () => {
        $('.pembahasan').addClass('active');
        axios.get(`${url.api}mytryout/getanswert/${user.idUser}/${tryout.id_tryout}/${quiz[0].kind_tryout}/${noSoal + 1}`).then(
            (res) => {
                setPembahasan(res.data.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    console.log(JSON.parse(localStorage.getItem('quizMapelInfo')));

    const Clock = () => {
        var now = new Date().getTime();
        // var start = (JSON.parse(localStorage.getItem('quizMapelInfo')).timestartsecond * 1000);
        // var now = start + 1000;
        let waktu = (JSON.parse(localStorage.getItem('quizMapelInfo')).timeendsecond * 1000);

        var distance = waktu - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const [currentCount, setCount] = useState((JSON.parse(localStorage.getItem('quizMapelInfo')).timeendsecond * 1000 - now) / 1000);
        const timer = () => setCount(currentCount - 1);

        useEffect(
            () => {
                if (currentCount <= 0) {
                    return handleSelesai();
                }
                const id = setInterval(timer, 1000);
                return () => clearInterval(id);
            },
            [currentCount]
        );


        return (
            <div className="timer">
                <div className="box jam">
                    <h4 id="tjam">{hours}</h4>
                    <h6>Jam</h6>
                </div>
                <div className="box menit">
                    <h4 id="tmenit">{minutes}</h4>
                    <h6>Menit</h6>
                </div>
                <div className="box detik">
                    <h4 id="tdetik">{seconds}</h4>
                    <h6>Detik</h6>
                </div>
            </div>
        )
    };

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-left">
                        <div className="heading">
                            <h1>{quizMapel.name}</h1>
                            <h2>{(quiz[noSoal] == null) ? "" : quiz[noSoal].namamapel}</h2>
                        </div>
                        <div className="question">
                            <h3>Soal {(quiz[noSoal] == null) ? "" : quiz[noSoal].no_soal}</h3>
                            <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].soal}</p>
                            <img src={(quiz[noSoal] == null) ? "" : quiz[noSoal].image} alt="" />
                        </div>
                        <hr />
                        <div className="answer">
                            <ul>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 1) ? "circle active" : "circle"} onClick={() => { handleJawab(1) }}>A</div>
                                    </div>
                                    <div className="text">
                                        <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].pilihan1}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 2) ? "circle active" : "circle"} onClick={() => { handleJawab(2) }}>B</div>
                                    </div>
                                    <div className="text">
                                        <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].pilihan2}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 3) ? "circle active" : "circle"} onClick={() => { handleJawab(3) }}>C</div>
                                    </div>
                                    <div className="text">
                                        <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].pilihan3}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 4) ? "circle active" : "circle"} onClick={() => { handleJawab(4) }}>D</div>
                                    </div>
                                    <div className="text">
                                        <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].pilihan4}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <div className={(answer[noSoal] == 5) ? "circle active" : "circle"} onClick={() => { handleJawab(5) }}>E</div>
                                    </div>
                                    <div className="text">
                                        <p>{(quiz[noSoal] == null) ? "" : quiz[noSoal].pilihan5}</p>
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
                                    (quiz.length - 1 != noSoal) ?
                                        <button className="btn-navigasi" onClick={handleNext}>Selanjutnya</button>
                                        :
                                        ""
                                }

                                {
                                    (quiz.length - 1 == noSoal) ?
                                        <button className="btn-submit" onClick={handleSelesai}>Selesai</button>
                                        :
                                        ""
                                }
                                {
                                    (localStorage.getItem('pembahasan') == 1) ?
                                        <button className="btn-submit" onClick={handlePembahasan}>Pembahasan</button>
                                        :
                                        ""
                                }

                            </div>

                        </div>

                        <div className="pembahasan">
                            <div className="heading">
                                <h1>Pembahasan</h1>
                            </div>
                            <div className="question">
                                {/* <h3>Soal {(quiz[noSoal] == null) ? "" : quiz[noSoal].no_soal}</h3> */}
                                <p>{(pembahasan == null) ? "" : pembahasan.pembahasan}</p>
                                <img src={(pembahasan == null) ? "" : pembahasan.imagepembahasan} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="content-right">
                        <Clock />
                        
                        <button className="btn-submit" onClick={handleSelesai}>Selesai</button>

                        <div className="card" id="navigasi-soal">
                            {
                                (quiz.length >= 1) ?
                                    <div className="card-body">
                                        {
                                            quiz.map(function (el, idx) {
                                                return (
                                                    <div className={(noSoal == idx) ? "box" : "box"} id={idx} key={idx} onClick={handleNomerSoal}>{idx + 1}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}