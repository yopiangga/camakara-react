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
            kode: "sz",
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
        $('.caraTopUp-page .main .content .content-body .card-metode .form .form-group-select .group-right .select .icon-right i').toggleClass('active');
        $('.caraTopUp-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body').toggleClass('active');
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

                $('.p-bca').addClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 1:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').addClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');

                $('.p-bca').removeClass('active');
                $('.p-mandiri').addClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 2:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').addClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');

                $('.p-bca').removeClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').addClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 3:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').addClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');
                
                $('.p-bca').removeClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').addClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 4:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').addClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').removeClass('active');

                $('.p-bca').removeClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').addClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 5:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').addClass('active');
                $('#btn-shopee').removeClass('active');

                $('.p-bca').removeClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').addClass('active');
                $('.p-shopee').removeClass('active');
                break;
            case 6:
                $('#btn-bca').removeClass('active');
                $('#btn-mandiri').removeClass('active');
                $('#btn-bni').removeClass('active');
                $('#btn-bri').removeClass('active');
                $('#btn-alfamart').removeClass('active');
                $('#btn-ovo').removeClass('active');
                $('#btn-shopee').addClass('active');

                $('.p-bca').removeClass('active');
                $('.p-mandiri').removeClass('active');
                $('.p-bni').removeClass('active');
                $('.p-bri').removeClass('active');
                $('.p-alfa').removeClass('active');
                $('.p-ovo').removeClass('active');
                $('.p-shopee').addClass('active');
                break;
        }

        window.scroll({
            top: 550,
            left: 0,
            behavior: 'smooth',
        });
    }


    const history = useHistory();

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

                        <div className="card-petunjuk">
                            <h3>Petunjuk Transfer</h3>

                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer ATM BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Pilih transak <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer Tunai BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer ATM BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer ATM BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer ATM BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer ATM BCA</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Pilih transaksi hdaja <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer ATM BCA</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="petunjuk p-alfa">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-alfa">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-alfa">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-ovo">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-ovo">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-ovo">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="petunjuk p-shopee">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-shopee">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-shopee">
                                <hr />
                                <h4>Transfer ATM</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih transaksi lain</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih transaksi <span>lain</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}