import { useContext, useState, useEffect } from "react";
import { FaClock, FaStickyNote } from "react-icons/fa"
import { UserContext } from "../../pages/userContext";
import { useHistory } from "react-router";
import $ from 'jquery';
import axios from "axios";

export function InfoMapel() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        if(user == null){
            history.push('/');
        }
        setTryout(JSON.parse(localStorage.getItem('tryout')));
    }, [])

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

    const handleKerjakan = (event) => {

        axios.post(`${url.api}exam/${user.idUser}/${JSON.parse(localStorage.getItem('tryout')).id_tryout}/${event.target.value}`).then(
            (res) => {
                // console.log(res.data);
                localStorage.setItem("waktu", JSON.stringify(res.data.time));
                localStorage.setItem("waktuStart", JSON.stringify(res.data.timestart));
                localStorage.setItem("waktuStartSecond", JSON.stringify(res.data.timestartsecond));
                localStorage.setItem("waktuEndSecond", new Date().getTime() + res.data.time * 60 * 1000);
                // console.log(res);
            }
        ).catch((err) => {
            console.log(err);
        })

        axios.get(`${url.api}exam/${JSON.parse(localStorage.getItem('tryout')).id_tryout}/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                localStorage.setItem("tryoutReadyMapel", JSON.stringify(res.data.data));
                localStorage.setItem("pembahasan", 0);
                history.push("/exam");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    const handlePembahasan = (event) => {
        axios.get(`${url.api}exam/${JSON.parse(localStorage.getItem('tryout')).id_tryout}/${event.target.value}`).then(
            (res) => {
                localStorage.setItem("pembahasan", 1);
                setTryout(res.data.data);
                localStorage.setItem("tryoutReadyMapel", JSON.stringify(res.data.data));
                history.push('./exam');
            }
        ).catch((err) => {
            console.log(err);
        })

    }

    // console.log(tryout);

    return (
        <div>

            <section className="info-mapel-tryout">
                <div className="content">
                    <nav>
                        <a className="navigation nav-left" onClick={handleTPS}>
                            <h2>TPS</h2>
                        </a>
                        <a className="navigation nav-right" onClick={handleTKA}>
                            <h2>TKA</h2>
                        </a>
                    </nav>
                    <div className="content-body">

                        <div className="card card-tps card-1">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Penalaran Umum</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> {(localStorage.getItem('tryout') != null) ? JSON.parse(localStorage.getItem('tryout')).q_penalaran : 0} Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> {(localStorage.getItem('tryout') != null) ? JSON.parse(localStorage.getItem('tryout')).t_penalaran : 0} Menit</h4>
                                </li>
                                <li>
                                    <div className="action">
                                        {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[0][1] == 1) ?
                                            <button className="btn-kerjakan" value="q_penalaran" onClick={handlePembahasan}>Pembahasan</button>
                                            :
                                            <button className="btn-kerjakan" value="q_penalaran" onClick={handleKerjakan}>Kerjakan</button>
                                        }
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-2">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Pemahaman Bacaan dan Menulis</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_pemahaman} Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_pemahaman} Menit</h4>
                                </li>
                                <li>
                                    <div className="action">
                                        {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[1][1] == 1) ?
                                            <button className="btn-kerjakan" value="q_pemahaman" onClick={handlePembahasan}>Pembahasan</button>
                                            :
                                            <button className="btn-kerjakan" value="q_pemahaman" onClick={handleKerjakan}>Kerjakan</button>
                                        }
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-3">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Pengetahuan dan Pemahaman Umum</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_pengetahuan} Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_pengetahuan} Menit</h4>
                                </li>
                                <li>
                                    <div className="action">
                                        {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[2][1] == 1) ?
                                            <button className="btn-kerjakan" value="q_pengetahuan" onClick={handlePembahasan}>Pembahasan</button>
                                            :
                                            <button className="btn-kerjakan" value="q_pengetahuan" onClick={handleKerjakan}>Kerjakan</button>
                                        }
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-4">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Pengetahuan Kuantitatif</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_pengetahuank} Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_pengetahuank} Menit</h4>
                                </li>
                                <li>
                                    <div className="action">
                                        {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[3][1] == 1) ?
                                            <button className="btn-kerjakan" value="q_pengetahuank" onClick={handlePembahasan}>Pembahasan</button>
                                            :
                                            <button className="btn-kerjakan" value="q_pengetahuank" onClick={handleKerjakan}>Kerjakan</button>
                                        }
                                    </div>
                                </li>
                            </div>
                        </div>


                        {
                            JSON.parse(localStorage.getItem('tryout')).type_tryout == 1 ?

                                <div className="content-body">
                                    <div className="card card-tka card-5">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Biologi</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_biologi} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_biologi} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[2][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_biologi" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_biologi" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-1">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Fisika</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_fisika} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_fisika} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[1][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_fisika" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_fisika" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-2">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Kimia</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_kimia} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_kimia} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[0][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_kimia" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_kimia" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-3">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Matematika IPA</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_matematika} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_matematika} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[3][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_matematika" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_matematika" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="content-body">
                                    <div className="card card-tka card-5">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Sejarah</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_sejarah} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_sejarah} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[0][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_sejarah" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_sejarah" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-1">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Geografi</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_geografi} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_geografi} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[1][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_geografi" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_geografi" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-2">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Ekonomi</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_ekonomi} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_ekonomi} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[2][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_ekonomi" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_ekonomi" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div className="card card-tka card-3">
                                        <div className="card-heading">
                                            <FaStickyNote />
                                            <h3>Sosiologi</h3>
                                        </div>
                                        <div className="card-body">
                                            <li>
                                                <FaStickyNote />
                                                <h4><span>Jumlah Soal :</span> {JSON.parse(localStorage.getItem('tryout')).q_sosiologi} Soal</h4>
                                            </li>
                                            <li>
                                                <FaClock />
                                                <h4><span>Waktu Pengerjaan :</span> {JSON.parse(localStorage.getItem('tryout')).t_sosiologi} Menit</h4>
                                            </li>
                                            <li>
                                                <div className="action">
                                                    {(JSON.parse(localStorage.getItem('tryout')).tryoutanswert[3][1] == 1) ?
                                                        <button className="btn-kerjakan" value="q_sosiologi" onClick={handlePembahasan}>Pembahasan</button>
                                                        :
                                                        <button className="btn-kerjakan" value="q_sosiologi" onClick={handleKerjakan}>Kerjakan</button>
                                                    }
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </div>

                        }





                    </div>
                </div>
            </section>
        </div>
    )
}