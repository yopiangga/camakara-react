import { timers } from "jquery";
import { useContext, useState, useEffect } from "react";
import { FaBookReader, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { UserContext } from "../../pages/userContext";


export function InfoDetail() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [time, setTime] = useState({});
    const [totalTime, setTotalTime] = useState({jam: "0", menit: "0", detik: "0"});

    useEffect( () => {
        setTotalTime({
            jam : cariJam(),
            menit : "0",
            detik : "0"
        })
    }, [])

    console.log(tryout);

    const cariJam = () => {
        let totalMenit = parseInt(tryout.t_biologi) + 
        parseInt(tryout.t_fisika) + 
        parseInt(tryout.t_kimia) +
        parseInt(tryout.t_matematika) + 
        parseInt(tryout.t_pemahaman) + 
        parseInt(tryout.t_penalaran) +
        parseInt(tryout.t_pengetahuan) +
        parseInt(tryout.t_pengetahuank) +
        parseInt(tryout.t_sejarah) +
        parseInt(tryout.t_sosiologi) +
        parseInt(tryout.t_geografi) +
        parseInt(tryout.t_ekonomi) + 
        30 ;

        let jam = totalMenit % 60;

        return(jam);
    }


    return (
        <div>
            <section className="info-detail-tryout">
        <div className="content">
            <div className="content-left">
                <div className="nama-tryout">
                    <h2>{tryout.name}</h2>
                    <hr />
                    <button className="btn-daftar">Belum daftar</button>
                </div>
                <div className="widget">
                    <div className="widget-child kategori-tryout">
                        <FaBookReader />
                        <h4>Camakara Tryout</h4>
                    </div>
                    <div className="widget-child peserta">
                        <FaUsers />
                        <h4>1550 Orang</h4>
                    </div>
                    <div className="widget-child peserta">
                        <FaMoneyBillWave />
                        <h4>Rp {tryout.price} K</h4>
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
                            <h4>00</h4>
                            <h6>Detik</h6>
                        </div>
                    </div>
                </div>

                <div className="beli-tryout">
                    <button className="btn-beli-tryout">Beli Tryout</button>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}