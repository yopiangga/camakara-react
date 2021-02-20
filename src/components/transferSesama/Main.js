
import $ from "jquery"

export function Main() {

    const checkUserTransfer = () => {
        $('.transferSesama-page .main .content .content-body .card-transfer-detail').addClass('active')
    }

    return (
        <div>
            <section class="main">
                <div class="content">
                    <div class="content-head">
                        <h2>Yuk Transfer Sesama Camakara</h2>
                    </div>
                    <div class="content-body">

                        <div class="card-jumlah">
                            <div class="form">
                                <h2>Transfer Sesama</h2>

                                <div class="form-group">
                                    <label for="">Nomor Telephone Penerima</label>
                                    <input type="text" placeholder="0823xxxxxx"/>
                                </div>

                                <hr />

                                <div class="form-group">
                                    <label for="">Masukkan jumlah Transfer</label>
                                    <input type="number" placeholder="50.000"/>
                                </div>

                                <hr />
                                <button class="btn-check" onClick={checkUserTransfer}>Check Sekarang</button>

                            </div>
                        </div>

                        <div class="card-transfer-detail">
                            <div class="form">
                                <h2>Transfer Detail</h2>

                                <div class="form-group">
                                    <h3 class="nama-bank">Transfer Sesama</h3>
                                    <hr />
                                    <h5>No. Telephone :</h5>
                                    <h4>0823 3041 0865</h4>

                                    <h5>Atas Nama</h5>
                                    <h4>Alfian Prisma Yopiangga</h4>

                                    <h5>Nominal</h5>
                                    <h3><span>30.0000</span></h3>
                                </div>

                                <div class="form-action">
                                    <button class="btn-cancel">Cancel</button>
                                    <button class="btn-konfirmasi">Konfirmasi</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}