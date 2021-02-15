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
                                    <h3>Optimized for Speed A Quality</h3>
                                    <p>Necessitatibus labore vitae commodi dicta esse quos tempora minus alias quod vel!</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <FaChartLine />
                                </div>
                                <div className="card-text">
                                    <h3>Optimized for Speed A Quality</h3>
                                    <p>Necessitatibus labore vitae commodi dicta esse quos tempora minus alias quod vel!</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-image">
                                    <FaChartLine />
                                </div>
                                <div className="card-text">
                                    <h3>Optimized for Speed A Quality</h3>
                                    <p>Necessitatibus labore vitae commodi dicta esse quos tempora minus alias quod vel!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <div className="title">
                            <h2>Apa yang anda dapat ?</h2>
                        </div>
                        <div className="deskripsi">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore vitae commodi dicta esse quos tempora minus alias quod vel!</p>
                        </div>
                        <button className="btn-action">Mulai Tryout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}