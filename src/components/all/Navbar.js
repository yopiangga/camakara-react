import React, { useContext, useEffect } from "react";
import { FaBars, FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaLongArrowAltRight, FaMoneyBillAlt, FaTwitter, FaUser } from "react-icons/fa";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../../assets/images/logo-1.png';
import { UserContext } from "../../pages/userContext";
import $ from 'jquery'
import axios from 'axios';
import { useHistory } from "react-router-dom";


export function Navbar() {

    let history = useHistory();
    const [menuActive, setMenuActive, user, setUser] = useContext(UserContext);

    $('section').click(function () {
        $('.nav-desktop .content .icon .dropdownProfile').removeClass('active')
        $('.nav-mobile .content .icon .dropdownProfile').removeClass('active')
    })
    
    const NavMobile = () => {
        $('.menu#mobile').toggleClass('active');
    }

    const NavProfile = () => {
        document.querySelector(".nav-desktop .content .icon .dropdownProfile").classList.toggle('active');
    }

    const NavProfileMobile = () => {
        document.querySelector(".nav-mobile .content .icon .dropdownProfile").classList.toggle('active');
    }

    const navLogin = () => {
        history.push('/login');
    }

    const navLogout = () => {
        localStorage.clear();
        setUser({email: "", token: "", idUser: ""});
    }

    // useEffect( () => {

    //     axios.get(`http://localhost:8080/api/user/islogin}`, {headers: {"Authorization" : `Bearer ${user.token}`}}).then(
    //         (res) => {
    //             console.log(res);
    //         }
    //     ).catch( (err) => {
    //         window.alert(err);
    //     })

    // }, [])

    // console.log(user);

    return (
        <div>
            <nav className="nav-desktop" id="desktop">
                <div className="content">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu">
                        <ul>
                            <li className={menuActive == "beranda" ? "active" : ""}> <Link to="/" >Beranda</Link><hr /></li>
                            <li className={menuActive == "about" ? "active" : ""}> <Link to="/tentang-kami">Tentang Camakara</Link><hr /></li>
                            <li className={menuActive == "products" ? "active" : ""}> <Link to="/produk" >Produk</Link><hr /></li>
                            <li className={menuActive == "testimonial" ? "active" : ""}> <Link to="/testimoni" >Testimonial</Link><hr /></li>
                        </ul>
                    </div>
                    <div className="icon">
                        <div className="icon-coins">
                            <FaMoneyBillAlt size={20} />
                            <h4>59 K</h4>
                        </div>
                        {user ? 
                                <div className="icon-profile" onClick={NavProfile}>
                                    <FaUser color="#FDBF1F" />
                                    <h4>Profile</h4>
                                    <FaChevronDown />
                                </div>
                            :
                            <div className="icon-profile" onClick={navLogin}>
                                    <FaUser color="#FDBF1F" />
                                    <h4>Login</h4>
                                    <FaLongArrowAltRight />
                                </div>
                        }
                        <div className="dropdownProfile">
                            <ul>
                                <li className={menuActive == "profile" ? "active" : ""}> <Link to="/profile" >Akun Saya</Link><hr /></li>
                                <li className={menuActive == "topUp" ? "active" : ""}> <Link to="/top-up">Top Up</Link><hr /></li>
                                <li className={menuActive == "myTryout" ? "active" : ""}> <Link to="/tryout-saya" >Tryout Saya</Link><hr /></li>
                                <li className={menuActive == "riwayatTopUp" ? "active" : ""}> <Link to="/riwayat-top-up" >Riwayat Top Up</Link><hr /></li>
                                <li className={menuActive == "logOut" ? "active" : ""} onClick={navLogout}> <a >Log Out</a><hr /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="nav-mobile" id="mobile">
                <div className="content">
                    <div className="btn-menu" onClick={NavMobile}>
                        <FaBars />
                    </div>

                    <div className="icon">
                        <div className="icon-coins">
                            <FaMoneyBillAlt size={20} color="#FDBF1F"/>
                            <h4>59 K</h4>
                        </div>
                        <div className="icon-profile" onClick={NavProfileMobile}>
                            <i className="fas fa-user"></i>
                            <h4>Profile</h4>
                            <FaChevronDown />
                        </div>
                        <div className="dropdownProfile">
                            <ul>
                                <li className={menuActive == "profile" ? "active" : ""}> <Link to="/profile" >Akun Saya</Link><hr /></li>
                                <li className={menuActive == "topUp" ? "active" : ""}> <Link to="/top-up">Top Up</Link><hr /></li>
                                <li className={menuActive == "myTryout" ? "active" : ""}> <Link to="/tryout-saya" >Tryout Saya</Link><hr /></li>
                                <li className={menuActive == "riwayatTopUp" ? "active" : ""}> <Link to="/riwayat-top-up" >Riwayat Top Up</Link><hr /></li>
                                <li className={menuActive == "logOut" ? "active" : ""}> <Link to="/login" >Log Out</Link><hr /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="menu" id="mobile">
                <ul>
                    <li className={menuActive == "beranda" ? "active" : ""}> <Link to="/" >Beranda</Link><hr /></li>
                    <li className={menuActive == "about" ? "active" : ""}> <Link to="/tentang-kami">Tentang Camakara</Link><hr /></li>
                    <li className={menuActive == "products" ? "active" : ""}> <Link to="/produk" >Produk</Link><hr /></li>
                    <li className={menuActive == "testimonial" ? "active" : ""}> <Link to="/testimoni" >Testimonial</Link><hr /></li>
                </ul>
            </div>
        </div>
    )
}