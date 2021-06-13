
import { useContext } from "react";
import { FaSearch } from "react-icons/fa"
import { UserContext } from "../../pages/userContext";
import $ from 'jquery';
import { useHistory } from "react-router-dom";

export function CariTryout() {
    const [menuActive, setMenuActive, user, setUser, detailUser, setDetailUser, url, setUrl, tryout, setTryout, category, setCategory] = useContext(UserContext);

    const history = useHistory();

    const handleCategory = (event) => {
        document.querySelector('.all').classList.remove("active");
        document.querySelector('.aUtbk').classList.remove("active");
        document.querySelector('.aBebas').classList.remove("active");
        document.querySelector('.aKuno').classList.remove("active");
        document.querySelector('.aQuiz').classList.remove("active");

        switch (event) {
            case 0:
                setCategory([1, 2, 3, 4]);
                document.querySelector('.all').classList.add("active");
                break;
            case 1:
                setCategory([1]);
                document.querySelector('.aUtbk').classList.add("active");
                break;
            case 2:
                setCategory([2]);
                document.querySelector('.aBebas').classList.add("active");
                break;
            case 3:
                setCategory([3]);
                document.querySelector('.aKuno').classList.add("active");
                break;
            case 4:
                setCategory([4]);
                document.querySelector('.aQuiz').classList.add("active");
                break;
        }
    }

    const handleCategoryMobile = (event) => {
        switch (event.target.value) {
            case '0':
                setCategory([1, 2, 3, 4]);
                break;
            case '1':
                setCategory([1]);
                break;
            case '2':
                setCategory([2]);
                break;
            case '3':
                setCategory([3]);
                break;
            case '4':
                setCategory([4]);
                break;
        }
    }

    const handleTryoutSaya = () => {
        history.push('/tryout-saya');
    }

    return (
        <div>
            <section className="cari-tryout">
                <div className="content">
                    <div className="content-title">
                        <h1>Cari Tryout</h1>
                        <p>Tryout yang telah dibeli berada pada halaman <span onClick={handleTryoutSaya}>Tryout Saya</span></p>
                    </div>
                    <div className="content-heading">
                        <div className="search">
                            {/* <i className="fas fa-search"></i> */}
                            {/* <FaSearch /> */}
                            {/* <input type="text" /> */}
                        </div>
                        <div className="navigation" id="desktop">
                            <ul>
                                <a className="all active" onClick={() => { handleCategory(0) }}><li>Semua Tryout</li><hr /></a>
                                <a className="aUtbk" onClick={() => { handleCategory(1) }}><li>Tryout UTBK</li><hr /></a>
                                <a className="aBebas" onClick={() => { handleCategory(2) }}><li>Tryout Bebas</li><hr /></a>
                                {/* <a className="aPaket"><li>Paket Tryout</li><hr /></a> */}
                                <a className="aKuno" onClick={() => { handleCategory(3) }}><li>Tryout Kuno</li><hr /></a>
                                <a className="aQuiz" onClick={() => { handleCategory(4) }}><li>Quiz</li><hr /></a>
                            </ul>
                        </div>
                        <div className="filter" id="mobile">
                            <select name="" className="filter-jenis" onChange={handleCategoryMobile}>
                                <option value="0">Semua</option>
                                <option value="1">Tryout UTBK</option>
                                <option value="2">Tryout Bebas</option>
                                {/* <option value="paket">Paket Tryout</option> */} 
                                <option value="3">Tryout Kuno</option>
                                <option value="4">Quiz</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}