import { FaGraduationCap, FaHourglass } from "react-icons/fa";
import { useHistory } from "react-router"

export function Main() {
    let history = useHistory()
    const handleKerjakan = () => {
        history.push("/tryout-detail")
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Tryout Saya</h2>
                        <div className="filter">
                            <select name="" id="" className="filter-jenis">
                                <option>Jenis Tryout</option>
                                <option value="semua">Semua</option>
                                <option value="utbk">Tryout UTBK</option>
                                <option value="bebas">Tryout Bebas</option>
                                <option value="paket">Paket Tryout</option>
                                <option value="kuno">Tryout Kuno</option>
                            </select>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Tryout V3 UTBK</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="icon">
                                    <div className="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="jenis">
                                    <FaGraduationCap />
                                    <h4>Tryout UTBK</h4>
                                </div>
                                <div className="aksi">
                                    <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Tryout V3 UTBK</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="icon">
                                    <div className="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="jenis">
                                    <FaGraduationCap />
                                    <h4>Tryout UTBK</h4>
                                </div>
                                <div className="aksi">
                                    <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Tryout V3 UTBK</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="icon">
                                    <div className="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="jenis">
                                    <FaGraduationCap />
                                    <h4>Tryout UTBK</h4>
                                </div>
                                <div className="aksi">
                                    <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Tryout V3 UTBK</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="icon">
                                    <div className="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="jenis">
                                    <FaGraduationCap />
                                    <h4>Tryout UTBK</h4>
                                </div>
                                <div className="aksi">
                                    <button className="btn-kerjakan" onClick={handleKerjakan}>Kerjakan</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}