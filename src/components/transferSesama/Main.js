import axios from 'axios';
import $ from "jquery"
import { useContext } from 'react';
import { UserContext } from '../../pages/userContext';

export function Main() {

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout] = useContext(UserContext);

    const checkUserTransfer = (event) => {
        event.preventDefault();
        let telp = document.querySelector("[name='noTelpTarget']").value;
        let nominal = document.querySelector("[name='nominalTransfer']").value;

        if(telp != null && nominal != null){
            axios.get(`${url.api}transfer/notelp/${telp}`, {headers: {"Authorization" : `Bearer ${user.token}`}}).then(
            (res) => {
                $('.transferSesama-page .main .content .content-body .card-transfer-detail').addClass('active')
            }
            ).catch((err) => {
                console.log(err);
            })
        } else {

        }
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Yuk Transfer Sesama Camakara</h2>
                    </div>
                    <div className="content-body">

                        <div className="card-jumlah">
                            <div className="form">
                                <h2>Transfer Sesama</h2>

                                <form onSubmit={checkUserTransfer}>
                                <div className="form-group">
                                    <label>Nomor Telephone Penerima</label>
                                    <input type="text" placeholder="0823xxxxxx" name="noTelpTarget"/>
                                </div>

                                <hr />

                                <div className="form-group">
                                    <label>Masukkan jumlah Transfer</label>
                                    <input type="number" placeholder="50.000" name="nominalTransfer"/>
                                </div>

                                <hr />
                                <button className="btn-check" >Check Sekarang</button>

                                </form>
                            </div>
                        </div>

                        <div className="card-transfer-detail">
                            <div className="form">
                                <h2>Transfer Detail</h2>

                                <div className="form-group">
                                    <h3 className="nama-bank">Transfer Sesama</h3>
                                    <hr />
                                    <h5>No. Telephone :</h5>
                                    <h4>0823 3041 0865</h4>

                                    <h5>Atas Nama</h5>
                                    <h4>Alfian Prisma Yopiangga</h4>

                                    <h5>Nominal</h5>
                                    <h3><span>30.0000</span></h3>
                                </div>

                                <div className="form-action">
                                    <button className="btn-cancel">Cancel</button>
                                    <button className="btn-konfirmasi">Konfirmasi</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}