import React, { useContext } from "react";
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaMoneyBillAlt, FaTwitter, FaUser } from "react-icons/fa";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../../assets/images/logo-1.png';
import { UserContext } from "../../pages/userContext";
import $ from 'jquery'

export function Navbar() {

    const [menuActive, setMenuActive] = useContext(UserContext);

    $('section').click(function () {
        $('.nav-desktop .content .icon .dropdownProfile').removeClass('active')
        $('.nav-mobile .content .icon .dropdownProfile').removeClass('active')
    })

    const NavProfile = () => {
        document.querySelector(".nav-desktop .content .icon .dropdownProfile").classList.toggle('active');
    }

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
                        <div className="icon-profile" onClick={NavProfile}>
                            <FaUser color="#FDBF1F" />
                            <h4>Profile</h4>
                            <FaChevronDown />
                        </div>
                        <div className="dropdownProfile">
                            <ul>
                                <li className={menuActive == "profile" ? "active" : ""}> <Link to="/profile" >Akun Saya</Link><hr /></li>
                                <li className={menuActive == "topUp" ? "active" : ""}> <Link to="/top-up">Top Up</Link><hr /></li>
                                <li className={menuActive == "myTryout" ? "active" : ""}> <Link to="/tryout-saya" >Tryout Saya</Link><hr /></li>
                                <li className={menuActive == "riwayatTopUp" ? "active" : ""}> <Link to="/riwayat-top-up" >Riwayat Top Up</Link><hr /></li>
                                <li className={menuActive == "logOut" ? "active" : ""}> <Link to="/logout" >Log Out</Link><hr /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="nav-mobile" id="mobile">
                <div className="content">
                    <div className="btn-menu">
                        <i className="fas fa-bars"></i>
                    </div>

                    <div className="icon">
                        <div className="icon-coins">
                            <i className="far fa-money-bill-alt"></i>
                            <h4>59 K</h4>
                        </div>
                        <div className="icon-profile">
                            <i className="fas fa-user"></i>
                            <h4>Profile</h4>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className="dropdownProfile">
                            <ul>
                                <a href="profile.html"><li>Akun Saya</li></a>
                                <a href="topup.html"><li>Top Up</li></a>
                                <a href="my-tryout.html"><li>Tryout Saya</li></a>
                                <a href="riwayat-pembelian.html"><li>Riwayat Top Up</li></a>
                                <a href="login.html"><li>Log Out</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="menu" id="mobile">
                <ul>
                    <a href="beranda.html" className="active"><li>Beranda</li><hr /></a>
                    <a href="about.html"><li>Tentang Camakara</li><hr /></a>
                    <a href="product.html"><li>Produk</li><hr /></a>
                    <a href="testimonial.html"><li>Testimonial</li><hr /></a>
                </ul>
            </div>
        </div>
    )
}