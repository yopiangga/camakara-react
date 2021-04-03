
import example from '../../assets/images/example.jpg';
import { useHistory } from "react-router"
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../pages/userContext';
import axios from 'axios';

export function CardTryout() {
    let history = useHistory()

    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, category, setCategory] = useContext(UserContext);
    const [tryouts, setTryouts] = useState([{}]);

    const handleBeli = (event) => {
        axios.get(`${url.api}tryout/get/${event.target.value}`).then(
            (res) => {
                setTryout(res.data.data);
                localStorage.setItem("tryout", JSON.stringify(res.data.data));
                history.push("/beli-tryout-detail");
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {

        axios.get(`${url.api}tryout/1`).then(
            (res) => {
                setTryouts(res.data.data.tryouts);
            }
            ).catch((err) => {
                console.log(err);
            })
            
        }, [])

    const validasi = (el) => {
        if(el != null){
            for(let i=0; i<3; i++){
                if(el[i] == category[0]){
                    return 1;
                }
            }
        }
        return 0;
    }

    console.log(tryouts)

    return (
        <div>
            <section className="card-tryout">
                <div className="content">
                               
                    {
                        tryouts.map(function (el, idx) {
                            if(validasi(el.cat_tryout) || category[0] == 1 && category[1] == 2 && category[2] == 3){
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-image">
                                            <img src={example} />
                                        </div>
                                        <div className="card-body">
                                            {/* <h6>{el.cat_tryout}</h6> */}
                                            <h3>{el.name}</h3>
                                            <p>{el.descript}</p>
                                            <div className="action">
                                                <button className="btn-beli" value={el.id_tryout} onClick={handleBeli}>Beli Sekarang</button>
                                                <h4>Rp {el.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )  
                            }
                             
                        }) 
                    }
                    
                </div>
            </section>
        </div>
    )
}