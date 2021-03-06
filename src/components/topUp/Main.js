import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

import bankBCA from '../../assets/images/bank-bca.png';
import bankMandiri from '../../assets/images/bank-mandiri.png';
import bankBNI from '../../assets/images/bank-bni.png';
import bankBRI from '../../assets/images/bank-bri.png';
import transferIcon1 from '../../assets/images/transfer-icon-1.png';
import transferIcon2 from '../../assets/images/transfer-icon-2.png';
import transferIcon3 from '../../assets/images/transfer-icon-3.png';
import transferIcon4 from '../../assets/images/transfer-icon-4.png';
import { useContext, useEffect, useState } from "react";
import $, { event, timers } from 'jquery';
import { UserContext } from "../../pages/userContext";
import axios from 'axios';
import { useHistory } from "react-router";


export function Main() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);
    const [jumlahTopUp, setJumlahTopUp] = useState(0);
    const [metode, setMetode] = useState({ metode: "", kode: "", rek: "", atasNama: "" });
    const [gambar, setGambar] = useState();
    const [metodePembayaran, setMetodePembayaran] = useState([
        {
            idPayment: "1",
            metode: "Bank BCA",
            kode: "122",
            rek: "122085775526608",
            atasNama: "demitesfaye"
        },
        {
            idPayment: "2",
            metode: "Bank Mandiri( Cara Top Up sama seperti isi saldo shopeepay ) ",
            kode: "893",
            rek: "893085775526608",
            atasNama: "demitesfaye"
        },
        {
            idPayment: "3",
            metode: "Bank BNI ( Cara Top Up sama seperti isi saldo shopeepay ) ",
            kode: "8807",
            rek: "8807085775526608",
            atasNama: "demitesfaye"
        },
        {
            idPayment: "4",
            metode: "Bank BRI ( Cara Top Up sama seperti isi saldo shopeepay ) ",
            kode: "112",
            rek: "112085775526608",
            atasNama: "demitesfaye"
        },
        {
            idPayment: "5",
            metode: "Alfamart / Alfamidi ( Cara Top Up sama seperti isi saldo shopeepay ) ",
            kode: "-",
            rek: "085775526608",
            atasNama: "demitesfaye"
        },
        {
            idPayment: "6",
            metode: "OVO",
            kode: "-",
            rek: "085775526608",
            atasNama: "camakara"
        },
        {
            idPayment: "7",
            metode: "Shopee Pay",
            kode: "-",
            rek: "085775526608",
            atasNama: "demitesfaye"
        }

    ])

    useEffect(() => {
        if(user == null){
            history.push('/');
        }
    })

    const dropDownBank = () => {
        $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select .icon-right i').toggleClass('active');
        $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body').toggleClass('active');
    }

    const selectBank = (metode) => {
        setMetode({
            idPayment: metodePembayaran[metode].idPayment,
            metode: metodePembayaran[metode].metode,
            kode: metodePembayaran[metode].kode,
            rek: metodePembayaran[metode].rek,
            atasNama: metodePembayaran[metode].atasNama
        })

        switch (metode) {
            case 0:
                $('#btn-bca').addClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 1:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').addClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 2:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').addClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 3:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').addClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 4:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').addClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 5:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').addClass('active');
                $('#btn-shopee').removeClass('active');
                break;
            case 6:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').addClass('active');
                break;
        }

        window.scroll({
            top: 550,
            left: 0,
            behavior: 'smooth',
        });
    }
    const handleFile = (event) => {
        setGambar(event.target.files[0]);
    }

    const history = useHistory();

    const handleKonfirmasi = (event) => {
        event.preventDefault();
        // console.log(metode.idPayment);
        if(metode.idPayment == undefined || metode.idPayment == 0){

        } else {
            document.querySelector('.bg-loading').classList.add('active');
            event.preventDefault();
            let formData = new FormData();
            formData.append('image', gambar);
            formData.append('id', detailUser.id_user);
            formData.append('nominal', jumlahTopUp);
            formData.append('bankid', metode.idPayment);
    
            axios({
                url: `${url.api}topup`,
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization" : `Bearer ${user.token}`
                },
                data: formData
            }).then(
                (res) => {
                    // console.log(res);
                    document.querySelector('.bg-loading').classList.remove('active');
                    history.push('/riwayat-transaksi');
                }
            ).catch((err) => {
                document.querySelector('.bg-loading').classList.remove('active');
                console.log(err);
            })
        }
        
    }

    const handleChoiceJumlah = (event) => {
        const id = event.target.id;

        if (id == "choice-10") {
            setJumlahTopUp(10000);

        } else if (id == "choice-20") {
            setJumlahTopUp(20000);

        } else if (id == "choice-50") {
            setJumlahTopUp(50000);

        } else if (id == "choice-100") {
            setJumlahTopUp(100000);

        } else if (id == "choice-200") {
            setJumlahTopUp(200000);

        } else if (id == "choice-300") {
            setJumlahTopUp(300000);
        } else {
            // setJumlahTopUp(event.target.value);
        }

    }

    const saldoPrint = () => {
        let saldoString = `${jumlahTopUp}`,
        sisa 	= saldoString.length % 3,
        rupiah 	= saldoString.substr(0, sisa),
        ribuan 	= saldoString.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
            let separator = sisa ? ',' : '';
            rupiah += separator + ribuan.join(',');
        }

        return(rupiah);
    }

    const handleCara = () => {
        history.push('/cara-top-up');    
    }

    // console.log(jumlahTopUp);

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Yuk Isi Saldo Camakara</h2>
                    </div>
                    <div className="content-body">

                        <div className="card-metode">
                            <div className="form">
                                <h2>Metode Transfer</h2>
                                <div className="form-group-select" onClick={dropDownBank}>
                                    <div className="group-left">
                                        <img src={transferIcon1} />
                                    </div>
                                    <div className="group-right">
                                        <div className="select">
                                            <div className="title">
                                                <h3>Bank Transfer</h3>
                                            </div>
                                            <div className="icon-right">
                                                <FaChevronDown />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="select-body">
                                            <button className="btn-bca" onClick={() => { selectBank(0) }}>
                                                <div className="left">
                                                    <img src={bankBCA} />
                                                    <h4>Bank BCA</h4>
                                                </div>
                                                <div className="right" id="btn-bca">
                                                    <FaCheckCircle size={20} />
                                                </div>
                                            </button>
                                            <hr />
                                            <button className="btn-mandiri" onClick={() => { selectBank(1) }}>
                                                <div className="left">
                                                    <img src={bankMandiri} />
                                                    <h4>Bank Mandiri</h4>
                                                </div>
                                                <div className="right" id="btn-mandiri">
                                                    <FaCheckCircle size={20} />
                                                </div>
                                            </button>
                                            <hr />
                                            <button className="btn-bni" onClick={() => { selectBank(2) }}>
                                                <div className="left">
                                                    <img src={bankBNI} />
                                                    <h4>Bank BNI</h4>
                                                </div>
                                                <div className="right" id="btn-bni">
                                                    <FaCheckCircle size={20} />
                                                </div>
                                            </button>
                                            <hr />
                                            <button className="btn-bri" onClick={() => { selectBank(3) }}>
                                                <div className="left">
                                                    <img src={bankBRI} />
                                                    <h4>Bank BRI</h4>
                                                </div>
                                                <div className="right" id="btn-bri">
                                                    <FaCheckCircle size={20} />
                                                </div>
                                            </button>
                                            <hr />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group-left">
                                        <img src={transferIcon2} />
                                    </div>
                                    <div className="group-right">
                                        <button className="btn-alfamart" onClick={() => { selectBank(4) }}>
                                            <div className="left">
                                                <h4>Alfamart / Alfamidi</h4>
                                            </div>
                                            <div className="right" id="btn-alfamart">
                                                <FaCheckCircle size={20} />
                                            </div>
                                        </button>
                                        <hr />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group-left">
                                        <img src={transferIcon3} />
                                    </div>
                                    <div className="group-right">
                                        <button className="btn-ovo" onClick={() => { selectBank(5) }}>
                                            <div className="left">
                                                <h4>OVO</h4>
                                            </div>
                                            <div className="right" id="btn-ovo">
                                                <FaCheckCircle size={20} />
                                            </div>
                                        </button>
                                        <hr />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="group-left">
                                        <img src={transferIcon4} />
                                    </div>
                                    <div className="group-right">
                                        <button className="btn-shopee" onClick={() => { selectBank(6) }}>
                                            <div className="left">
                                                <h4>Shopee Pay</h4>
                                            </div>
                                            <div className="right" id="btn-shopee">
                                                <FaCheckCircle size={20} />
                                            </div>
                                        </button>
                                        <hr />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-jumlah" id="card-jumlah">
                            <div className="form">
                                <h2>Jumlah Top Up (Rp)</h2>
                                <p>Belum tahu cara Top Up ? <span onClick={handleCara}>Lihat cara</span></p>
                                <div className="choice-group">
                                    <button className="btn-choice" id="choice-10" onClick={handleChoiceJumlah}>10.000</button>
                                    <button className="btn-choice" id="choice-20" onClick={handleChoiceJumlah}>20.000</button>
                                    <button className="btn-choice" id="choice-50" onClick={handleChoiceJumlah}>50.000</button>
                                    <button className="btn-choice" id="choice-100" onClick={handleChoiceJumlah}>100.000</button>
                                    <button className="btn-choice" id="choice-200" onClick={handleChoiceJumlah}>200.000</button>
                                    <button className="btn-choice" id="choice-300" onClick={handleChoiceJumlah}>300.000</button>
                                </div>

                                {/* <div className="form-group">
                                    <label >Masukkan jumlah Top Up</label>
                                    <input type="number" value={saldoPrint()} readOnly/>
                                </div> */}

                                {/* <hr /> */}

                                <div className="form-group">
                                    <div className="jumlah-topup">
                                        <h4>Jumlah Top Up</h4>
                                        <h4>Rp <span>{saldoPrint()}</span></h4>
                                    </div>
                                    <div className="jumlah-pembayaran">
                                        <h4>Total Pembayaran</h4>
                                        <h4><span>Rp {saldoPrint()}</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-transfer-detail">
                            <form onSubmit={handleKonfirmasi}>
                                <div className="form">
                                    <h2>Transfer Detail</h2>

                                    <div className="form-group">
                                        <h3 className="nama-bank">{metode.metode}</h3>
                                        <hr />
                                        <h5 className="nama-bank">Kode Bank : </h5>
                                        <h4 className="atas-nama">{metode.kode}</h4>
                                        <h5>No. Rekening : </h5>
                                        <h3><span className="no-rekening">{metode.rek}</span></h3>
                                        <br />
                                        <h5 className="nama-bank">Atas nama : </h5>
                                        <p>Hanya menerima dari <span className="atas-nama">{metode.atasNama}</span></p>
                                    </div>

                                    <div className="form-image">
                                        <input type="file" id="avatar" className="avatar" name="avatar" onChange={handleFile} accept="image/png, image/jpeg" />

                                        {/* <div className="lewati-image">
                                            <input type="checkbox" name="lewati" id="lewati" />
                                            <label htmlFor="lewati">Lewati upload bukti pembayaran</label>
                                        </div> */}
                                    </div>

                                    <button className="btn-konfirmasi">Konfirmasi</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}