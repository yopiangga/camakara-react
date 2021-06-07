import {IoMdPeople} from "react-icons/io"
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
                                <h3>Keisya</h3>
                                <p>Soal TO Camakara tuh benar-bener sulit, kaget sih pas tau kalo pembuat soalnya mahasiwa yang lolos SBMPTN 2020 atau 2021. </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="icon">
                            <IoMdPeople />
                        </div>
                        <div className="title">
                            <h2>Testimoni dari peserta</h2>
                        </div>
                        <div className="deskripsi">
                            <p>Camakara sudah terbukti membantu peserta yang ingin meraih PTN impian</p>
                        </div>
                        <button className="btn-action">Mulai Tryout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}