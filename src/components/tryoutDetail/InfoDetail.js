import { useContext, useState, useEffect } from "react";
import { FaBookReader, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { useHistory } from "react-router";
import { UserContext } from "../../pages/userContext";


export function InfoDetail() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [time, setTime] = useState({});
    const [totalTime, setTotalTime] = useState({ jam: "0", menit: "0", detik: "0" });

    const history = useHistory();

    useEffect(() => {
        if (user == null) {
            history.push('/');
        }

        setTryout(JSON.parse(localStorage.getItem('tryout')));
    }, [])


    const cariJam = () => {
        let type = JSON.parse(localStorage.getItem('tryout')).type_tryout;
        let Saintek = JSON.parse(localStorage.getItem('tryout')).totalSaint;
        let Soshum = JSON.parse(localStorage.getItem('tryout')).totalSoshum;
        let totalMenit;
        type == 2 ? totalMenit = Soshum : totalMenit = Saintek;
        let data = {
            jam: Math.floor(totalMenit / 60),
            menit: totalMenit % 60,
            detik: 0
        }
        return (data);
    }

    var end = JSON.parse(localStorage.getItem('tryoutSelesai'));
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = end - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        (hours == null || minutes == null || seconds == null) ?
            hours = minutes = seconds = 0 :
            setTotalTime({
                jam: hours,
                menit: minutes,
                detik: seconds
            })

        if (distance < 0) {
            clearInterval(x);
            setTotalTime({
                jam: 0,
                menit: 0,
                detik: 0
            })
            // document.getElementById("tjam").innerHTML = "END";
        }
    }, 1000);

    return (
        <div>

            <section className="info-detail-tryout">
                <div className="content">
                    <div className="content-left">
                        <div className="nama-tryout">
                            <h2>{tryout.name}</h2>
                            <hr />
                            {user == null ? <button className="btn-daftar">Belum daftar</button> : ""}
                        </div>
                        <div className="widget">
                            <div className="widget-child kategori-tryout">
                                <FaBookReader />
                                <h4>Camakara Tryout</h4>
                            </div>
                            <div className="widget-child peserta">
                                <FaUsers />
                                <h4>{tryout.personBuy} Orang</h4>
                            </div>
                            <div className="widget-child peserta">
                                <FaMoneyBillWave />
                                <h4>Rp {tryout.price}</h4>
                            </div>
                        </div>
                        <div className="deskripsi-tryout">
                            <h3>Deskripsi</h3>
                            <hr />
                            <p>{tryout.descript}</p>
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
                                            <h4><span>Tanggal :</span> {tryout.date_start}</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> {tryout.time_start} WIB</h4>
                                        </li>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <h3>Selesai Tryout</h3>
                                    </div>
                                    <div className="card-body">
                                        <li>
                                            <h4><span>Tanggal :</span> {tryout.date_end}</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> {tryout.time_end} WIB</h4>
                                        </li>

                                    </div>
                                </div>
                            </  div>
                            <div className="waktu-pengerjaan">
                                <div className="box jam">
                                    <h4 id="tjam">{totalTime.jam}</h4>
                                    <h6>Jam</h6>
                                </div>
                                <div className="box menit">
                                    <h4 id="tmenit">{totalTime.menit}</h4>
                                    <h6>Menit</h6>
                                </div>
                                <div className="box detik">
                                    <h4 id="tdetik">{totalTime.detik}</h4>
                                    <h6>Detik</h6>
                                </div>
                            </div>
                        </div>

                        <div className="beli-tryout">
                            {
                                (user == null || totalTime.jam <=0 && totalTime.menit <= 0 && totalTime.detik <= 0) ?
                                    ""
                                    :
                                    <button className="btn-beli-tryout" onClick="">Selesai Tryout</button>
                            }
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}