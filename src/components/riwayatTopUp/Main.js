import { FaHourglass, FaMoneyBillAlt } from "react-icons/fa";
import { useHistory } from "react-router"

export function Main() {

    let history = useHistory()

    const handleTopUp = () => {
        history.push("/top-up")
    }

    const handleTransferSesama = () => {
        history.push("/transfer-sesama")
    }

    return (
        <div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h2>Riwayat Top Up</h2>
                        <div className="filter">
                            <button onClick={handleTopUp}>Top Up</button>
                            <button onClick={handleTransferSesama}>Transfer Sesama Camakara</button>
                            <select name="" id="" className="filter-status">
                                <option>Status Top Up</option>
                                <option value="semua">Semua</option>
                                <option value="buktiPembayaran">Bukti Pembayaran</option>
                                <option value="menunggu">Menunggu Konfirmasi</option>
                                <option value="berhasil">Berhasil</option>
                                <option value="gagal">Gagal</option>
                            </select>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Top Up 20.000</h3>
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
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div className="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Top Up 20.000</h3>
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
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div className="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Top Up 20.000</h3>
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
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div className="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text">
                                    <h3>Top Up 20.000</h3>
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
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div className="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}