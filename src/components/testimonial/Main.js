import { FaLongArrowAltDown } from "react-icons/fa";

export function Main() {

    return (
        <div>
            <section className="bg-main"></section>

            <section className="main">
                <div className="content">
                    <div className="content-left">
                        <h1>Testimonial </h1>
                        <p>Apa kata mereka tentang camakara ?</p>

                        <div className="circle">
                            <FaLongArrowAltDown />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="card-group">
                            <div className="card card-1">
                                <h2>Kirim Testimoni</h2>
                                <form action="">
                                    <div className="form-group">
                                        <label>Nama anda</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Testimoni</label>
                                        <textarea type="text" rows="5"></textarea>
                                    </div>
                                    <button className="btn-sendTestimoni">Kirimkan</button>
                                </form>
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