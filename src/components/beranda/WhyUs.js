
import {FaCuttlefish} from "react-icons/fa"
import {FaChartLine} from "react-icons/fa"

export function WhyUs() {
    return(
        <div>
            <section className="why-use">
                <div className="content">
                    <div className="content-head">
                        <div className="icon">
                            <FaCuttlefish />
                        </div>
                        <div className="title">
                            <h2>Mengapa Memilih Kami ?</h2>
                        </div>
                        <div className="deskripsi">
                            <p>Dengan bergabung bersama Camakara, kalian dapat mengasah berbagai keahlian serta soft skills yang akan bermanfaat di masa mendatang, seperti: </p>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="card">
                            <div className="card-image">
                                <FaChartLine />
                            </div>
                            <div className="card-text">
                                <h3>Mengembangkan Potensi Diri/Self-Improvement </h3>
                                <p>Melalui dukungan satu sama lain, Camakara akan mendorong kalian untuk terus berkembang bersama agar dapat menjadi individu yang lebih baik.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <FaChartLine />
                            </div>
                            <div className="card-text">
                                <h3>Melatih Problem Solving Skill</h3>
                                <p>Camakara menyediakan sarana untuk melatih kemampuan kalian dalam menyelesaikan masalah/problem solving skill melalui berbagai tantangan yang unik dan beragam.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <FaChartLine />
                            </div>
                            <div className="card-text">
                                <h3>Mengasah Leadership Skill</h3>
                                <p>Kalian dapat mengasah kemampuan dalam memotivasi serta mempengaruhi rekan kerja agar dapat menuntaskan segala macam masalah dan program kerja secara efektif dan efisien.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <FaChartLine />
                            </div>
                            <div className="card-text">
                                <h3>Meningkatkan Relasi & Communication Skill</h3>
                                <p>Kalian bisa melatih kemampuan berbicara dan berkomunikasi dengan orang lain sekaligus mendapatkan relasi serta teman baru dari berbagai daerah yang siap membantu kalian di dalam Camakara.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}