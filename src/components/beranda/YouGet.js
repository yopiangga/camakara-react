import {FaFire} from "react-icons/fa"
import {FaChartLine} from "react-icons/fa"

export function YouGet() {
    return(
        <div>
            <section className="you-get">
                <div className="content">
                    <div className="content-left">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <FaChartLine />
                                </div>
                                <div className="card-text">
                                    <h3>Sharing Sessions</h3>
                                    <p>Bincang-bincang dengan tema menarik antara para anggota Camakara dengan pembicara yang kompeten dalam bidangnya masing-masing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <FaChartLine />
                                </div>
                                <div className="card-text">
                                    <h3>Seminar</h3>
                                    <p>Acara pertemuan sebagai media untuk memberikan informasi atau pelatihan mengenai topik yang akan didiskusikan kepada para peserta seminar.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <FaChartLine />
                                </div>
                                <div className="card-text">
                                    <h3>Try-Out</h3>
                                    <p>Camakara menyediakan try-out serta membagikan informasi seputar try-out UTBK demi mempersiapkan anggota Camakara dalam menggapai universitas yang diimpikan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <div className="title">
                            <h2>Apa Saja Aktivitas Camakara ?</h2>
                        </div>
                        <div className="deskripsi">
                            <p>Camakara menyediakan berbagai aktivitas yang seru nan bermanfaat agar kalian dapat semakin siap mencapai universitas yang dituju, di antaranya adalah</p>
                        </div>
                        <button className="btn-action">Mulai Tryout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}