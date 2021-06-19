import { timers } from "jquery";
import { useContext, useState, useEffect } from "react";
import { FaBook, FaBookReader, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { UserContext } from "../../pages/userContext";
import axios from 'axios';
import { useHistory } from "react-router";
import ModalConfirmation from "../all/ModalConfirmation";


export function InfoDetail() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, quiz, setQuiz] = useContext(UserContext);
    const [time, setTime] = useState({});
    const [totalTime, setTotalTime] = useState({ jam: 0, menit: 0, detik: 0 });
    const [props, setProps] = useState({ status: 0, title: "", description: "", link: "" });

    useEffect(() => {
        setQuiz(JSON.parse(localStorage.getItem('quiz')));
        setTotalTime(cariJam);
    }, [])

    // console.log(totalTime);

    const history = useHistory();

    const cariJam = () => {
        let totalMenit = parseInt(JSON.parse(localStorage.getItem('quiz')).t_mapel);

        let data = {
            jam: Math.floor(totalMenit / 60),
            menit: totalMenit % 60,
            detik: 0
        }
        return (data);
    }

    const handleIkuti = () => {
        document.querySelector('.bg-loading').classList.add('active');

        axios.post(`${url.api}myquiz`, { iduser: detailUser.id_user, idquiz: quiz.id_quiz})
            .then(
                (res) => {
                    document.querySelector('.bg-loading').classList.remove('active');
                    if(res.data.status - 200 == 0){
                        setProps({
                            status: 1,
                            title: "Ikuti Quiz",
                            description: "Selamat Quiz berhasil anda ikuti, anda dapat melihatnya dihalaman Tryout Saya",
                            link: "/tryout-saya"
                        })
                        document.querySelector('.modal-confirmation').classList.add('active');
                    } else {
                        setProps({
                            status: 0,
                            title: "Pembelian Tryout",
                            description: "Sayang sekali, Quiz gagal diikuti. Quiz telah mencapai batas maksimum.",
                            link: "/ikuti-quiz-detail"
                        })
                        document.querySelector('.modal-confirmation').classList.add('active');
                    }
                }
            ).catch((err) => {
                // console.log(err)
                document.querySelector('.bg-loading').classList.remove('active');
                setProps({
                    status: 0,
                    title: "Pembelian Tryout",
                    description: "Sayang sekali, Quiz gagal diikuti. Silahkan ulangi untuk mencobanya kembali.",
                    link: "/ikuti-quiz-detail"
                })
                document.querySelector('.modal-confirmation').classList.add('active');
            })
    }

    const handleDaftar = () => {
        history.push('./daftar');
    }

    return (
        <div>
            <ModalConfirmation status={props.status} title={props.title} description={props.description} link={props.link} />
            <section className="info-detail-tryout">
                <div className="content">
                    <div className="content-left">
                        <div className="nama-tryout">
                            <h2>{quiz.name}</h2>
                            <hr />
                            {user == null ? <button className="btn-daftar" onClick={handleDaftar}>Belum daftar</button> : ""}
                        </div>
                        <div className="widget">
                            <div className="widget-child kategori-tryout">
                                <FaBookReader />
                                <h4>Quiz {quiz.class}</h4>
                            </div>
                            <div className="widget-child peserta">
                                <FaUsers />
                                <h4>{quiz.amountBuy}/{quiz.kuota} Orang</h4>
                            </div>
                            <div className="widget-child peserta">
                                <FaBook />
                                <h4>Mapel {quiz.mapel}</h4>
                            </div>
                        </div>
                        <div className="deskripsi-tryout">
                            <h3>Deskripsi</h3>
                            <hr />
                            <p>{quiz.descript}</p>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="tanggal-pengerjaan">
                            <h3>Waktu Pengerjaan</h3>
                            <hr />
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-heading">
                                        <h3>Mulai Tryout</h3>
                                    </div>
                                    <div className="card-body">
                                        <li>
                                            <h4><span>Tanggal :</span> {quiz.date_start}</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> {quiz.time_start} WIB</h4>
                                        </li>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <h3>Selesai Tryout</h3>
                                    </div>
                                    <div className="card-body">
                                        <li>
                                            <h4><span>Tanggal :</span> {quiz.date_end}</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> {quiz.time_end} WIB</h4>
                                        </li>

                                    </div>
                                </div>
                            </div>
                            <div className="waktu-pengerjaan">
                                <div className="box jam">
                                    <h4>{totalTime.jam}</h4>
                                    <h6>Jam</h6>
                                </div>
                                <div className="box menit">
                                    <h4>{totalTime.menit}</h4>
                                    <h6>Menit</h6>
                                </div>
                                <div className="box detik">
                                    <h4>{totalTime.detik}</h4>
                                    <h6>Detik</h6>
                                </div>
                            </div>
                        </div>

                        <div className="beli-tryout">
                            {
                                (user == null) ?
                                    ""
                                    :
                                    <button className="btn-beli-tryout" onClick={handleIkuti}>Ikuti Quiz</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}