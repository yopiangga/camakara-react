import { FaCheckCircle, FaChevronDown, FaChevronRight } from "react-icons/fa";

import bankBCA from '../../assets/images/bank-bca.png';
import bankMandiri from '../../assets/images/bank-mandiri.png';
import bankBNI from '../../assets/images/bank-bni.png';
import bankBRI from '../../assets/images/bank-bri.png';
import transferIcon1 from '../../assets/images/transfer-icon-1.png';
import transferIcon2 from '../../assets/images/transfer-icon-2.png';
import transferIcon3 from '../../assets/images/transfer-icon-3.png';
import transferIcon4 from '../../assets/images/transfer-icon-4.png';
import { useContext, useState } from "react";
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
                                            <td>Pilih <b>Transaksi lain</b> <FaChevronRight /> <b>Pembayaran</b> <FaChevronRight /> <b>Lainnya</b> <FaChevronRight /> <b>BRIVA.</b> ( SHOPEEPAY )</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Masukkan no. BRIVA <b>112 085775526608</b>, kemudian pilih <b>Benar.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, pilih <b>Ya.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer iBanking BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih menu <b>Pembayaran.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pada kolom navigasi sebelah kiri dalam menu <b>Pembayaran</b>, pilih <b>BRIVA</b> (Shopeepay ).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Pilih rekening asal, lalu pilih <b>Isi Kode Bayar</b> dan masukkan kode Virtual Account BRIVA ShopeePay <b>112 085775526608</b> kemudian klik <b>Kirim.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Periksa informasi yang tertera di layar,pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, masukkan password iBanking dan mToken, lalu klik <b>Kirim.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>TTransfer mBanking BRI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Masuk ke menu Mobile Banking BRI. Kemudian, pilih <b>Pembayaran</b> <FaChevronRight /> <b>BRIVA.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Masukkan kode bayar BRIVA ( SHOPEEPAY ) <b>112 085775526608</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan PIN, kemudian pilih <b>Send.</b> Apabila pesan konfirmasi untuk transaksi menggunakan SMS muncul, pilih <b>OK.</b> Status transaksi akan dikirimkan melalui SMS dan dapat digunakan sebagai bukti pembayaran.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer Mini ATM / EDC</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Mini ATM</b> <FaChevronRight /> <b>Pembayaran</b> <FaChevronRight /> <b>BRIVA.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Gesek kartu debit BRI Anda.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan no. BRIVA (Shopeepay ) <b>112 085775526608</b>, kemudian klik <b>OK.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Kemudian pilih Lanjut. Apabila transaksi berhasil, maka bukti transfer akan tercetak.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bri">
                                <hr />
                                <h4>Transfer Setor Tunai</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Isi formulir setor tunai BRI dengan rincian berikut ini:<br />
                                            - No. rekening tujuan <b>112 085775526608 ( Shopeepay )</b><br />
                                            - Nama rekening tujuan: demitesfaye.<br />
                                            - Total: Jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Bawa formulir setor tunai ke teller dan lakukan pembayaran sesuai nominal.</td>
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
                                            <td>Pilih <b>Transaksi Lainnya</b> <FaChevronRight /> <b>Transfer</b> <FaChevronRight /> Pilih ke Rek <b>BCA Virtual Account.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Masukkan no. Virtual Account <b>122 085775526608</b>, kemudian pilih <b>Benar.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, pilih <b>Ya.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer iBanking BCA</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Transfer Dana</b> <FaChevronRight /> <b>Transfer</b> ke <b>BCA Virtual Account.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Centang no. Virtual Account dan masukkan <b>122 085775526608</b> dan klik <b>Lanjutkan.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan nominal Top up min. Rp10.000.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye . Jika benar, klik <b>Lanjutkan.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Masukkan respon KeyBCA Anda dan klik <b>Kirim.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bca">
                                <hr />
                                <h4>Transfer mBanking BCA</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>m-Transfer</b> <FaChevronRight /> <b>BCA Virtual Account.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Masukkan no. Virtual Account <b>122 085775526608</b> dan pilih <b>Send.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan nominal Top up min. Rp10.000.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, pilih OK.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Masukkan PIN m-BCA Anda dan pilih <b>OK</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer ATM BNI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Menu Lain</b> <FaChevronRight /> <b>Transfer.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih jenis rekening asal dan pilih <b>Virtual Account Billing.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan no. Virtual Account <b>8807 085775526608</b> dan pilih <b>Benar.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, pilih <b>Ya.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer iBanking BNI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Transfer</b> <FaChevronRight /> <b>Virtual Account Billing.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Masukkan no. Virtual Account <b>807 085775526608</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Pilih <b>Rekening Debet</b> dan klik <b>Lanjut.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">6.</td>
                                            <td>Masukkan Kode Otentikasi Token Anda, lalu klik <b>Proses.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>Transfer mBanking BNI</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih menu <b>Transfer</b> <FaChevronRight /> <b>Virtual Account Billing.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih <b>Rekening Debet</b> <FaChevronRight /> Masukkan kode bayar <b>8807 085445526608</b> pada menu <b>Input Baru.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, masukkan password transaksi dan klik Lanjut.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-bni">
                                <hr />
                                <h4>SMS Banking</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Buat SMS dengan format berikut.<br />
                                            - TRANSFER(spasi)Nomor Virtual Account(spasi)Jumlah Top up saldo yang diinginkan<br />
                                            - Contoh: TRANSFER(spasi)8807085775526608(spasi)100000<br />
                                            - min. jumlah Top up Rp10.000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Kirim SMS ke 3346.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Balas SMS sesuai dengan instruksi.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer ATM Mandiri</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Bayar/Beli.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih <b>Lainnya</b> <FaChevronRight /> <b>Lainnya</b> <FaChevronRight /> <b>Multi Payment.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan kode perusahaan 89308 dan pilih <b>Benar.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan no. Virtual Account <b>893 085775526608</b> dan pilih Benar.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">6.</td>
                                            <td>Periksa informasi yang tertera di layar,pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, tekan angka 1 dan pilih <b>Ya.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer iBanking Mandiri</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Pilih <b>Bayar</b> <FaChevronRight /> <b>Multi Payment.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih Dari Rekening: <b>Rekening Anda dan Penyedia Jasa: Camakara,</b>, lalu klik <b>Lanjutkan.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan no. Virtual Account <b>893 085775526608</b> lalu klik <b>Lanjutkan.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">5.</td>
                                            <td>Periksa informasi yang tertera di layar,pastikan terkirim ke shopeepay atas nama demitesfaye. Jika benar, centang tagihan dan klik Lanjutkan.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">6.</td>
                                            <td>Masukkan PIN Token Anda dan klik <b>Kirim.</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="petunjuk p-mandiri">
                                <hr />
                                <h4>Transfer mBanking Mandiri</h4>
                                <hr />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="no">1.</td>
                                            <td>Login ke mBanking Anda. Pilih <b>Bayar</b>, kemudian pilih <b>Multi Payment.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Pilih <b>Penyedia Layanan: Camakara</b>, dan masukkan no. <b>Virtual Account 893 085775526608</b>, kemudian pilih <b>Lanjut.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Masukkan jumlah Top up saldo yang diinginkan (min. jumlah Top up Rp10.000).</td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Periksa informasi yang tertera di layar, pastikan terkirim ke shopeepay atas nama demitesfaye.Jika benar, masukkan PIN Anda dan pilih <b>OK.</b></td>
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
                                            <td>Log in ke website <b>Camakara.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">2.</td>
                                            <td>Klik <b>Top Up</b>, kemudian Klik <b>Isi Saldo Camakara.</b> Anda akan langsung diarahkan untuk memilih Metode Pembayaran.</td>
                                        </tr>
                                        <tr>
                                            <td className="no">3.</td>
                                            <td>Klik <b>Alfamart/Alfamidi.</b></td>
                                        </tr>
                                        <tr>
                                            <td className="no">4.</td>
                                            <td>Lakukan pengisian saldo ShopeePay di Alfamart/Alfamidi dengan menyebutkan no. 085775526608 (demitesfaye) dan nominal Top up yang Anda inginkan.</td>
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