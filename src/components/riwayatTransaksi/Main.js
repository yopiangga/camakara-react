import { FaCheck, FaExclamation, FaHourglass, FaMoneyBillAlt, FaRegCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router";
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from "../../pages/userContext";

export function Main() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [riwayatTopUp, setRiwayatTopUp] = useState([{}]);
    const [riwayatTransfer, setRiwayatTransfer] = useState([{}]);
    const [riwayatTerima, setRiwayatTerima] = useState([{}]);
    const [kategori, setKategori] = useState('3');
    const [status, setStatus] = useState('5');

    let history = useHistory()

    const handleTopUp = () => {
        history.push("/top-up")
    }

    const handleTransferSesama = () => {
        history.push("/transfer-sesama")
    }

    const handleKategori = (event) => {
        setKategori(event.target.value);
    }

    const handleStatus = (event) => {
        setStatus(event.target.value);
    }

    useEffect(() => {

        axios.get(`${url.api}riwayat/${user.idUser}`).then(
            (res) => {
                console.log(res);
                setRiwayatTopUp(res.data.topup);
                setRiwayatTransfer(res.data.pengirim);
                setRiwayatTerima(res.data.penerima);
            }
        ).catch((err) => {
            console.log(err);
        })

    }, [])


    const validasi = (event) => {
        if (status == '5')
            return (1);
        return (status == event);
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Riwayat Transaksi</h2>
                        <div className="filter">
                            <button onClick={handleTopUp}>Top Up</button>
                            <button onClick={handleTransferSesama}>Transfer Sesama Camakara</button>
                            <select name="" id="" className="filter-status" onChange={handleStatus}>
                                <option value="5">Semua</option>
                                <option value="0">Gagal Top Up</option>
                                <option value="1">Menunggu Konfirmasi</option>
                                <option value="2">Berhasil Top Up</option>
                                <option value="3">Transfer Sesama</option>
                                <option value="4">Terima Coin</option>
                            </select>
                        </div>
                    </div>
                    <div className="content-body">

                        {
                            riwayatTransfer.map(function (el, idx) {
                                if (validasi('3')) {
                                    return (
                                        <div className="card" key={idx}>
                                            <div className="card-body">
                                                <div className="text">
                                                    <h3>Transfer Rp {el.nominal}</h3>
                                                    <p>Pengirim : {el.from}</p>
                                                    <p>Penerima : {el.to}</p>
                                                </div>
                                                <div className="icon">
                                                    <div className="circle">
                                                        <FaCheck style={{ color: 'green' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="jenis">
                                                    <FaMoneyBillAlt />
                                                    <h4>Transfer Sesama</h4>
                                                </div>
                                                <div className="waktu">
                                                    <h4>{el.created_at}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                        {
                            riwayatTerima.map(function (el, idx) {
                                if (validasi('4')) {
                                    return (
                                        <div className="card" key={idx}>
                                            <div className="card-body">
                                                <div className="text">
                                                    <h3>Terima Rp {el.nominal}</h3>
                                                    <p>Pengirim : {el.from}</p>
                                                    <p>Penerima : {el.to}</p>
                                                </div>
                                                <div className="icon">
                                                    <div className="circle">
                                                        <FaCheck style={{ color: 'green' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="jenis">
                                                    <FaMoneyBillAlt />
                                                    <h4>Transfer Sesama</h4>
                                                </div>
                                                <div className="waktu">
                                                    <h4>{el.created_at}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                        {
                            riwayatTopUp.map(function (el, idx) {
                                if (validasi(el.status)) {
                                    return (
                                        <div className="card" key={idx}>
                                            <div className="card-body">
                                                <div className="text">
                                                    <h3>Top Up Rp {el.nominal}</h3>
                                                    <p>{el.fullname}</p>
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
                                                    <FaMoneyBillAlt />
                                                    <h4>{el.bank}</h4>
                                                </div>
                                                <div className="waktu">
                                                    <h4>{el.created_at}</h4>
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