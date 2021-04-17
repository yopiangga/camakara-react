import { useEffect, useState } from "react";
import { useHistory } from "react-router";


export function TableSection() {

    const [skorTryout, setSkorTryout] = useState({ data: [{}], id_tryout: "", nama_tryout: "" });

    useEffect(() => {
        setSkorTryout(JSON.parse(localStorage.getItem('skorTryout')));
    }, [])

    // console.log(skorTryout);

    let history = useHistory();

    const handleClick = () => {
        history.push('/skor-semua');
    }

    return (
        <div className="form-section">
            <div className="content">
                <div className="form-box">
                    <h2>{skorTryout.nama_tryout}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis!</p>

                    <form className="form-biodata">
                        <div className="row">
                            {
                                skorTryout.data.map(function (el, idx) {
                                    return (
                                        <div className="col-6" key={idx}>
                                            <div className="form-group">
                                                <label>{el.nama}</label>
                                                <h4>{el.nilai}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>


                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <button onClick={handleClick}>Ranking Tryout</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}