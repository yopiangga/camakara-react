import { FaClock, FaStickyNote } from "react-icons/fa"

export function InfoMapel() {

    return (
        <div>
            <section className="info-mapel-tryout">
                <div className="content">
                    <nav>
                        <a className="navigation nav-left active">
                            <h2>TPS</h2>
                        </a>
                        <a className="navigation nav-right">
                            <h2>TKA</h2>
                        </a>
                    </nav>
                    <div className="content-body">

                        <div className="card card-tps card-1">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Kemampuan Penalaran Umum</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-2">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Kemampuan Kuantitatif</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-3">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Pengetahuan dan Pemahaman Umum</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-4">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Bahasa Inggris</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tps card-5">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Kemampuan Memahami dan Menulis</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tka card-1 disable">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Fisika</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tka card-2 disable">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Kimia</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tka card-3 disable">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Matematika</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                        <div className="card card-tka card-4 disable">
                            <div className="card-heading">
                                <FaStickyNote />
                                <h3>Bahasa Inggris</h3>
                            </div>
                            <div className="card-body">
                                <li>
                                    <FaStickyNote />
                                    <h4><span>Jumlah Soal :</span> 20 Soal</h4>
                                </li>
                                <li>
                                    <FaClock />
                                    <h4><span>Waktu Pengerjaan :</span> 20 Menit</h4>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}