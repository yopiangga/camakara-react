
export function CariTryout() {
    return (
        <div>
            <section className="cari-tryout">
                <div className="content">
                    <div className="content-title">
                        <h1>Cari Tryout</h1>
                    </div>
                    <div className="content-heading">
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" />
                        </div>
                        <div className="navigation" id="desktop">
                            <ul>
                                <a className="all active"><li>Semua Tryout</li><hr /></a>
                                <a className="aUtbk"><li>Tryout UTBK</li><hr /></a>
                                <a className="aBebas"><li>Tryout Bebas</li><hr /></a>
                                <a className="aPaket"><li>Paket Tryout</li><hr /></a>
                                <a className="aKuno"><li>Tryout Kuno</li><hr /></a>
                            </ul>
                        </div>
                        <div className="filter" id="mobile">
                            <select name="" id="" className="filter-jenis">
                                <option>Filter</option>
                                <option value="semua">Semua</option>
                                <option value="utbk">Tryout UTBK</option>
                                <option value="bebas">Tryout Bebas</option>
                                <option value="paket">Paket Tryout</option>
                                <option value="kuno">Tryout Kuno</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}