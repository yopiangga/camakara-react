import {FaFire} from "react-icons/fa"
import example from "../../assets/images/example.jpg"

export function Testimonial() {
    return(
        <div>
            <section className="beranda-testimoni">
                <div className="content">
                    <div className="content-left">
                        <div className="items">
                            <div className="circle circle-1">
                                <img src={example} />
                            </div>
                            <div className="circle circle-2">
                                <img src={example} />
                            </div>
                            <div className="circle circle-3">
                                <img src={example} />
                            </div>
                            <div className="circle circle-4">
                                <img src={example} />
                            </div>
                            <div className="circle circle-5">
                                <img src={example} />
                            </div>
                            <div className="circle circle-6">
                                <img src={example} />
                            </div>
                            <div className="circle circle-7">
                                <img src={example} />
                            </div>
                            <div className="circle circle-8">
                                <img src={example} />
                            </div>

                            <div className="card">
                                <h3>Optimized for Speed A Quality</h3>
                                <p>Necessitatibus labore vitae commodi dicta esse quos tempora minus alias quod vel!</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="icon">
                            <FaFire />
                        </div>
                        <div className="title">
                            <h2>Testimoni dari peserta</h2>
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