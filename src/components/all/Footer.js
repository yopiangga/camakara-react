
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import example from "../../assets/images/example.jpg"

export function Footer() {
    return(
        <BrowserRouter>
            <section className="footer">
                <div className="content">
                    <div className="body">
                        <div className="contact">
                            <h4>Contact</h4>
                            <h6 >DKI Jakarta - Indonesia</h6>
                            <h6 >0896 6700 7110</h6>
                            <h6 >camakaraofficial@gmail.com</h6>
                            <h6 >www.camakara.com</h6>
                            <div className="media-sosial">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className="information">
                            <h4>Information</h4>
                            <h6 >Tryout Baru</h6>
                            <h6 >Tryout Populer</h6>
                            <h6 >Artikel</h6>
                            <h6 >Riwayat Pembelian</h6>
                        </div>
                        <div className="navigation">
                            <h4>Navigation</h4>
                            <h6 >Dashboard</h6>
                            <h6 >About Us</h6>
                            <h6 >Product</h6>
                            <h6 >Testimonials</h6>
                            <h6 >Contact</h6>
                        </div>
                        <div className="photo">
                            <h4>Photo in Instagram</h4>
                            <div className="image">
                                <img src={example} />
                                <img src={example} />
                                <img src={example} />
                                <img src={example} />
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <h4>Copyright @ 2021 Camakara - All Right Reserved</h4>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}