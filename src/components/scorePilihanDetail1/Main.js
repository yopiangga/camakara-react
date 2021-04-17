import { FaLongArrowAltDown } from "react-icons/fa";

export function Main() {

    return (
        <div>
            <section className="bg-main"></section>

            <section className="main">
                <div className="content">   
                    <div className="content-left">
                        <h4>RANGKING PILIHAN PERTAMA TRYOUT</h4>
                        <h1>{JSON.parse(localStorage.getItem('skorTryout')).nama_tryout}</h1>
                        <p>Rengking Peserta Tryout</p>
                    </div>
                </div>
            </section>
        </div>
    )
}