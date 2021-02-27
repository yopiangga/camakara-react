
import React, { useContext, useEffect } from 'react'

import {Navbar} from '../components/all/Navbar'
import {Main} from '../components/beranda/Main'
import {WhyUs} from '../components/beranda/WhyUs'
import { YouGet } from '../components/beranda/YouGet'
import { Testimonial } from '../components/beranda/Testimonial'
import { Contact } from '../components/beranda/Contact'
import {Footer} from '../components/all/Footer'
import { UserContext } from './userContext'

export function Beranda() {

    const [menuActive, setMenuActive] = useContext(UserContext)

    useEffect(() => {
        setMenuActive("beranda");
        document.title = "Beranda - Camakara";
    }, [])

    return (
        <div className="page home-page nav-dark">

            <Navbar />
            <Main />
            <WhyUs />
            <YouGet />
            <Testimonial />
            <Contact />        
            <Footer />
        </div>
    )
}
