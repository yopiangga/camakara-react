import { FaBookReader, FaMoneyBillWave, FaUsers } from "react-icons/fa";


export function InfoDetail() {

    return (
        <div>
            <section class="info-detail-tryout">
        <div class="content">
            <div class="content-left">
                <div class="nama-tryout">
                    <h2>Camakara Saintek</h2>
                    <hr />
                    <button class="btn-daftar">Belum daftar</button>
                </div>
                <div class="widget">
                    <div class="widget-child kategori-tryout">
                        <FaBookReader />
                        <h4>Camakara Tryout</h4>
                    </div>
                    <div class="widget-child peserta">
                        <FaUsers />
                        <h4>1550 Orang</h4>
                    </div>
                    <div class="widget-child peserta">
                        <FaMoneyBillWave />
                        <h4>Rp 19.000</h4>
                    </div>
                </div>
                <div class="deskripsi-tryout">
                    <h3>Deskripsi</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium error cumque. Animi est vero natus, similique recusandae voluptatem, aliquam voluptatibus sunt explicabo dignissimos modi expedita labore! Quisquam, ipsa? Accusamus!</p>
                </div>
            </div>
            <div class="content-right">
                <div class="tanggal-pengerjaan">
                    <h3>Waktu Pengerjaan</h3>
                    <hr />
                    <div class="card-group">
                                <div class="card">
                                    <div class="card-heading">
                                        <h3>Mulai Tryout</h3>
                                    </div>
                                    <div class="card-body">
                                        <li>
                                            <h4><span>Tanggal :</span> 18 Februari 2021</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> 00.00 WIB</h4>
                                        </li>

                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-heading">
                                        <h3>Selesai Tryout</h3>
                                    </div>
                                    <div class="card-body">
                                        <li>
                                            <h4><span>Tanggal :</span> 20 Februari 2021</h4>
                                        </li>
                                        <li>
                                            <h4><span>Waktu :</span> 23.59 WIB</h4>
                                        </li>
   
                                    </div>
                                </div>
                            </div>
                    <div class="waktu-pengerjaan">
                        <div class="box jam">
                            <h4>03</h4>
                            <h6>Jam</h6>
                        </div>
                        <div class="box menit">
                            <h4>30</h4>
                            <h6>Menit</h6>
                        </div>
                        <div class="box detik">
                            <h4>00</h4>
                            <h6>Detik</h6>
                        </div>
                    </div>
                </div>

                <div class="beli-tryout">
                    <button class="btn-beli-tryout">Beli Tryout</button>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}