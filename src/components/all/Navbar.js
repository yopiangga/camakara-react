import React from "react";
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaMoneyBillAlt, FaTwitter, FaUser } from "react-icons/fa";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../../assets/images/logo-1.png';

export function Navbar() {
    
    return(
        <div>
            <nav className="nav-desktop" id="desktop">
                <div className="content">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu">
                        <ul>
                            <li> <Link to="/" >Beranda</Link><hr /></li>
                            <li> <Link to="/tentang-kami" >Tentang Camakara</Link><hr /></li>
                            <li> <Link to="/produk" >Produk</Link><hr /></li>
                            <li> <Link to="/testimonial" >Testimonial</Link><hr /></li>
                        </ul>
                    </div>
                    <div className="icon">
                        <div className="icon-coins">
                            <FaMoneyBillAlt size={20}/>
                            <h4>59 K</h4>
                        </div>
                        <div className="icon-profile">
                            <FaUser color="#FDBF1F"/>
                            <h4>Profile</h4>
                            <FaChevronDown />
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