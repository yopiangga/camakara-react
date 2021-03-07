
import { FaLongArrowAltDown } from 'react-icons/fa';
import helpCenter from '../../assets/images/help-center.png';

export function Main() {
    return (
        <div>
            <section className="bg-main"></section>

            <section className="main">
                <div className="content">
                    <div className="content-left">
                        <h6>Selamat datang di Camakara</h6>
                        <h1>Penyelenggara Tryout UTBK Terpercaya di Indonesia</h1>
                        <p>Camakara menjadi salah satu platform terpercaya di Indonesia dalam menyelenggarakan, menyediakan informasi seputar tryout UTBK agar kalian dapat semakin bersemangat dalam memperjuangkan perguruan tinggi yang diimpikannya.</p>

                        <form>
                            <input type="text" placeholder="Tryout UTBK 2021" />
                            <button className="btn-searchTryout">Cari Tryout</button>
                        </form>
                        <div className="circle">
                            <FaLongArrowAltDown />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="card-group">
                            <div className="card card-1">
                                <h3>Pusat Bantuan</h3>
                                <img src={helpCenter} alt="" />
                                <p>Ceritakan masalah anda pada <span>Kak Sabrina</span> pusat bantuan cepat untuk masalah anda. WhatsApp <a>089667007110</a></p>
                            </div>
                            <div className="card card-2"></div>
                            <div className="card card-3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}