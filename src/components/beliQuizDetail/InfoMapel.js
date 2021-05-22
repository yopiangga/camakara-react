import { useContext } from "react";
import { FaClock, FaStickyNote } from "react-icons/fa"
import { UserContext } from "../../pages/userContext";
import $ from 'jquery';

export function InfoMapel() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, quiz, setQuiz] = useContext(UserContext);

    $('.navigation.nav-left').addClass('active');
    $('.navigation.nav-right').removeClass('active');
    $('.card-tps').removeClass('disable');
    $('.card-tka').addClass('disable');

    const handleTPS = () => {
        $('.navigation.nav-left').addClass('active');
        $('.navigation.nav-right').removeClass('active');
        $('.card-tps').removeClass('disable');
        $('.card-tka').addClass('disable');
    }

    const handleTKA = () => {
        $('.card-tka').removeClass('disable');
        $('.card-tps').addClass('disable');
        $('.navigation.nav-right').addClass('active');
        $('.navigation.nav-left').removeClass('active');
    }


    return (
        <div>
            <section className="info-mapel-tryout">
                <div className="content">
                    <nav>
                        <a className="navigation nav-left" style={{width: '100%'}}>
                            <h2>QUIZ</h2>
                        </a>
                    </nav>
                    <div className="content-body">

                        <div className="card card-tps card-1">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Quiz {quiz.mapel}</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> {quiz.q_mapel} Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> {quiz.t_mapel} Menit</h4>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}