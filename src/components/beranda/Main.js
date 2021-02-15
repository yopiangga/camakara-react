
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo distinctio amet id quis debitis eos eligendi quos tempora incidunt.</p>

                        <form>
                            <input type="text" placeholder="Tryout UTBK 2021" />
                            <button className="btn-searchTryout">Cari Tryout</button>
                        </form>
                        <div className="circle">
                            <i className="fas fa-long-arrow-alt-down"></i>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="card-group">
                            <div className="card card-1">
                                <h3>Pusat Bantuan</h3>
                                <img src={helpCenter} alt="" />
                                <p>Ceritakan masalah anda pada <span>Kak Nabila</span> pusat bantuan cepat untuk masalah anda. WhatsApp <a>0823 30410865</a></p>
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