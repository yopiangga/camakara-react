import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { UserContext } from "../../pages/userContext";

export function TableSection() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, category, setCategory] = useContext(UserContext);

    const [rankingTryout, setRankingTryout] = useState({data: [{nama_user: "", prodi: "", score: "", total: "", univ: "", univ_id: ""}], id_tryout: "", nama_tryout: ""});

    useEffect(() => {

        axios.get(`${url.api}score/boardtryoutall/${JSON.parse(localStorage.getItem('skorTryout')).id_tryout}`).then(
            (res) => {
                setRankingTryout(res.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, []);

    return(
        <div className="table-section">
            <div className="content">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="rank">Rank</th>
                                <th>Nama</th>
                                <th>Universitas</th>
                                <th>Prodi</th>
                                <th className="skor">Skor</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                rankingTryout.data.map(function(el, idx){
                                    return(
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{el.nama_user}</td>
                                            <td>{el.univ}</td>
                                            <td>{el.prodi}</td>
                                            <td className="skor">{el.total}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}