import { timers } from "jquery";
import { useContext, useState, useEffect } from "react";
import { FaBookReader, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { UserContext } from "../../pages/userContext";
import axios from 'axios';
import { useHistory } from "react-router";


export function InfoDetail() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [time, setTime] = useState({});
    const [totalTime, setTotalTime] = useState({ jam: "0", menit: "0", detik: "0" });
    const [gambar1, setGambar1] = useState('');
    const [gambar2, setGambar2] = useState('');
    const [gambar3, setGambar3] = useState('');
    const [gambar4, setGambar4] = useState('');
    const [gambar5, setGambar5] = useState('');

    useEffect(() => {
        setTryout(JSON.parse(localStorage.getItem('tryout')));
        setTotalTime(cariJam);
    }, [])

    // console.log(tryout)

    const history = useHistory();

    const cariJam = () => {
        let type = JSON.parse(localStorage.getItem('tryout')).type_tryout;
        let Saintek = JSON.parse(localStorage.getItem('tryout')).totalSaint;
        let Soshum = JSON.parse(localStorage.getItem('tryout')).totalSoshum;
        let totalMenit;

        type == 2 ? totalMenit = Soshum : totalMenit = Saintek;
        let data = {
            jam : Math.floor(totalMenit/60),
            menit : totalMenit % 60,
            detik : 0
        }
        return (data);
    }

    const validasi = () => {
        if (tryout.payment_method == '1') {
            if(document.querySelector('#free1') != null){
                if(document.querySelector('#free1').files.length === 0)
                    return 0;
            }

            if(document.querySelector('#free2') != null){
                if(document.querySelector('#free2').files.length === 0)
                    return 0;
            }

            if(document.querySelector('#free3') != null){
                if(document.querySelector('#free3').files.length === 0)
                    return 0;
            }

            if(document.querySelector('#free4') != null){
                if(document.querySelector('#free4').files.length === 0)
                    return 0;
            }

            if(document.querySelector('#free5') != null){
                if(document.querySelector('#free5').files.length === 0)
                    return 0;
            }
            
            return 1;

        } else if (tryout.payment_method == '2') {
            return 1;
        } else if (tryout.payment_method == '3') {
            if (parseInt(document.querySelector('#bebas').value) > tryout.price && parseInt(document.querySelector('#bebas').value) != NaN) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    const handleBeli = (event) => {
        document.querySelector('.bg-loading').classList.add('active');
        if (validasi()) {
            if (tryout.payment_method == '1') {
                event.preventDefault();
                let formData = new FormData();
                formData.append('image1', gambar1);
                formData.append('image2', gambar2);
                formData.append('image3', gambar3);
                formData.append('image4', gambar4);
                formData.append('image5', gambar5);
                formData.append('iduser', detailUser.id_user);
                formData.append('idtryout', tryout.id_tryout);

                axios({
                    url: `${url.api}mytryout`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: formData
                }).then(
                    (res) => {
                        // console.log(res);
                        alert(res.data.message);
                        history.push('/tryout-saya');
                    }
                ).catch((err) => {
                    console.log(err);
                })

            } else {
                if(tryout.payment_method == 3){
                    axios.post(`${url.api}mytryout`, { iduser: detailUser.id_user, idtryout: tryout.id_tryout, price: parseInt(document.querySelector('#bebas').value)})
                    .then(
                        (res) => {
                            document.querySelector('.bg-loading').classList.remove('active');
                            history.push('/tryout-saya');
                        }
                    ).catch((err) => {
                        console.log(err)
                        document.querySelector('.bg-loading').classList.remove('active');
                    })
                } else {
                    axios.post(`${url.api}mytryout`, { iduser: detailUser.id_user, idtryout: tryout.id_tryout})
                    .then(
                        (res) => {
                            document.querySelector('.bg-loading').classList.remove('active');
                            history.push('/tryout-saya');
                        }
                    ).catch((err) => {
                        console.log(err)
                        document.querySelector('.bg-loading').classList.remove('active');
                    })
                }
            }
        }
    }

    const handleFile1 = (event) => {
        setGambar1(event.target.files[0]);
    }

    const handleFile2 = (event) => {
        setGambar2(event.target.files[0]);
    }

    const handleFile3 = (event) => {
        setGambar3(event.target.files[0]);
    }

    const handleFile4 = (event) => {
        setGambar4(event.target.files[0]);
    }

    const handleFile5 = (event) => {
        setGambar5(event.target.files[0]);
    }

    const handleDaftar = () => {
        history.push('./daftar');
    }

    return (
        <div>
            <section className="info-detail-tryout">
                <div className="content">
                    <div className="content-left">
                        <div className="nama-tryout">
                            <h2>{tryout.name}</h2>
                            <hr />
                            {user == null ? <button className="btn-daftar" onClick={handleDaftar}>Belum daftar</button> : ""}
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

                        {(tryout.payment_method == '1') ?
                            <div className="form-free">
                                {(tryout.rule1 == '') ?
                                    <div></div>
                                    :
                                    <div className="group-free">
                                        <h4>{tryout.rule1}</h4>
                                        <div className="form-group">
                                            <label>Bukti Screenshot</label>
                                            <input type="file" id="free1" className="avatar" name="free1" onChange={handleFile1} accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                }

                                {(tryout.rule2 == '') ?
                                    <div></div>
                                    :
                                    <div className="group-free">
                                        <h4>{tryout.rule2}</h4>
                                        <div className="form-group">
                                            <label>Bukti Screenshot</label>
                                            <input type="file" id="free2" className="avatar" name="free2" onChange={handleFile2} accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                }

                                {(tryout.rule3 == '') ?
                                    <div></div>
                                    :
                                    <div className="group-free">
                                        <h4>{tryout.rule3}</h4>
                                        <div className="form-group">
                                            <label>Bukti Screenshot</label>
                                            <input type="file" id="free3" className="avatar" name="free3" onChange={handleFile3} accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                }

                                {(tryout.rule4 == '') ?
                                    <div></div>
                                    :
                                    <div className="group-free">
                                        <h4>{tryout.rule4}</h4>
                                        <div className="form-group">
                                            <label>Bukti Screenshot</label>
                                            <input type="file" id="free4" className="avatar" name="free4" onChange={handleFile4} accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                }

                                {(tryout.rule5 == '') ?
                                    <div></div>
                                    :
                                    <div className="group-free">
                                        <h4>{tryout.rule5}</h4>
                                        <div className="form-group">
                                            <label>Bukti Screenshot</label>
                                            <input type="file" id="free5" className="avatar" name="free5" onChange={handleFile5} accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                }

                            </div>
                            :
                            <div></div>

                        }

                        {(tryout.payment_method == '3') ?
                            <div className="form-bebas">
                                <div className="form-group">
                                    <label>Bayar Seikhlasnya</label>
                                    <input type="number" id="bebas" placeholder="Rp 1"/>
                                </div>
                            </div>
                            :
                            <div></div>
                        }

                        <div className="beli-tryout">
                            {
                                (user == null) ? 
                                ""
                                :
                                <button className="btn-beli-tryout" onClick={handleBeli}>Beli Tryout</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}