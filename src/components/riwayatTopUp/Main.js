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
            <section class="main">
                <div class="content">
                    <div class="content-head">
                        <h2>Riwayat Top Up</h2>
                        <div class="filter">
                            <button onClick={handleTopUp}>Top Up</button>
                            <button onClick={handleTransferSesama}>Transfer Sesama Camakara</button>
                            <select name="" id="" class="filter-status">
                                <option>Status Top Up</option>
                                <option value="semua">Semua</option>
                                <option value="buktiPembayaran">Bukti Pembayaran</option>
                                <option value="menunggu">Menunggu Konfirmasi</option>
                                <option value="berhasil">Berhasil</option>
                                <option value="gagal">Gagal</option>
                            </select>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="card">
                            <div class="card-body">
                                <div class="text">
                                    <h3>Top Up 20.000</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div class="icon">
                                    <div class="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="jenis">
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div class="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text">
                                    <h3>Top Up 20.000</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div class="icon">
                                    <div class="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="jenis">
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div class="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text">
                                    <h3>Top Up 20.000</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div class="icon">
                                    <div class="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="jenis">
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div class="waktu">
                                    <h4>23 Februari 2021</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text">
                                    <h3>Top Up 20.000</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div class="icon">
                                    <div class="circle">
                                        <FaHourglass />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="jenis">
                                    <FaMoneyBillAlt />
                                    <h4>Gopay</h4>
                                </div>
                                <div class="waktu">
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