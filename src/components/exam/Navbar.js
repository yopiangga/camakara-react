import React, { useContext, useEffect } from "react";
import { FaBars, FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaMoneyBillAlt, FaTwitter, FaUser } from "react-icons/fa";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../../assets/images/logo-1.png';
import { UserContext} from "../../pages/userContext";
import $ from 'jquery'
import axios from 'axios'


export function Navbar() {

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

    // useEffect( () => {

    //     axios.get(`http://localhost:8080/api/user/islogin}`, {headers: {"Authorization" : `Bearer ${user.token}`}}).then(
    //         (res) => {
    //             console.log(res);
    //         }
    //     ).catch( (err) => {
    //         window.alert(err);
    //     })

    // }, [])

    return (
        <div>
            <nav className="nav-desktop" id="desktop">
                <div className="content">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="menu">
                        
                    </div>
                    <div className="icon">

                        <div className="icon-profile" onClick={NavProfile}>
                            <h4>Alfian Prisma Yopiangga</h4>
                            <FaUser color="#FDBF1F" />
                        </div>
                        <div className="dropdownProfile">
                            <ul>
                                <li className={menuActive == "logOut" ? "active" : ""}> <Link to="/login" >Log Out</Link><hr /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="nav-mobile" id="mobile">
                <div className="content">
                    <div className="btn-menu-mobile">
                        <img src={logo} />
                    </div>

                    <div className="icon">
                        <div className="icon-profile" onClick={NavProfileMobile}>
                            <h4>Yopiangga</h4>
                            <FaUser />
                        </div>
                        <div className="dropdownProfile">
                            <ul>
                                <li className={menuActive == "logOut" ? "active" : ""}> <Link to="/login" >Log Out</Link><hr /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}